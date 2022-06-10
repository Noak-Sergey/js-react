"use strict";
//получаем кнопки по селектору-тега
const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));
// //console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList);
// //console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList);
// console.log(btns[0].classList.contains('blue'));

// btns[0].addEventListener('click', () => {
//     if(!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// })

//Делегирование=====
// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
//     //console.dir(event.target)
// });

// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

//Такой подход любят сотрудники google
wrapper.addEventListener('click', (event) => {
    if(event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);