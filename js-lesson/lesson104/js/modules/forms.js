import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => { //submit срабатывает всегда когда отправляют форму
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading; //задали аттрибут
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto
                `; //задали стили картинки для отображения по центру
            //form.append(statusMessage);
            //используем другой метод вместо append для вставики значка загрузки
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            //заменяем предыдущие две строки на fetch

            //При использовании связки XMLHttpRequest и FormData заголовок устанавливать не нужно, он сформируется автоматически
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            //если данные на сервер будут отправляться в формате JSON тогда заголовок нам нужен
            //request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form); //используется для отправки данных на php сервера

            //преобразуем в стандартный объект js для конвертации в json
            // const object = {};
            // formData.forEach((value, key) => {
            //     object[key] = value;
            // });
            // const json = JSON.stringify(object); //используется для отправки данных на nodeJS сервера
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            //код ниже заменяем на функцию postData строка 246
            // fetch('server.php', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: json
            // })
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });


            //старая обработка запроса XMLhttpRequest
            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         console.log(request.response);
            //         showThanksModal(message.success);
            //         form.reset();
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }

    //красивое уведомление пользвателя
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        //скрываем контент внутри модального окна
        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);
        //динамически с помощью JS создаем элемент
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;