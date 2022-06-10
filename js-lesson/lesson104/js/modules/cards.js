import {getResource} from '../services/services';

function cards() {
    //Используем классы для карточек меню============================
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.price = price;
            this.transfer = 27; // какой-то курс валюты
            this.changeToUAH(); // перезапишет this.price уже с актуальной конвертацией
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        //создадим метод для формирования верстки
        render() {
            const element = document.createElement('div');

            //обработаем массив classes
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); //и такам образом сократим верстку подставляя класс "menu__item"
            }

            element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> y.e/день</div>
                    </div>
            `;
            this.parent.append(element);
        }
    }

    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {  //использовали деструктуризацию
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

    //используем axios
    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price
    //         }) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

}

export default cards;