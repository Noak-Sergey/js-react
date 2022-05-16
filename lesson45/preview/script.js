//Правильное назначение обработчика события
 const btns = document.querySelectorAll('button');
// btns[0].addEventListener('click', () => {
//     alert('Yes first click');
// });

// btns[1].addEventListener('mouseenter', () => {
//     console.log('mouseenter');
// });

//При наведении получаем элемент
// btns[2].addEventListener('mouseenter', (e) => {
//     console.log(e.target);
// })

//Удаляем элемент со страницы при наведении мышью
// btns[2].addEventListener('mouseenter', (e) => {
//     e.target.remove();
// })

//Удаляем обработчик события
const deleteElement = (e) => {
    e.target.remove();
}

// btns[2].addEventListener('click', deleteElement);
// btns[2].removeEventListener('click', deleteElement);

// //Остановка стандартного поведения браузера
// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// })

//Назначаем обработчик на все элементы(кнопки)
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement)
})