'use strict';
//Получаем элемент по ID:
const box = document.getElementById('box');
console.log(box);
//Получаем элемент по тегу:
const btns = document.getElementsByTagName('button');
console.log(btns); //Получаем коллекцию html
console.log(btns[1]); //Получаем отдельный элемент

//Получаем отдельную кнопку например кнопку №2
const btn2 = document.getElementsByTagName('button')[1];
console.log(btn2);

//Используем классы для получения элементов
const circles = document.getElementsByClassName('circle');
console.log(circles);

//Современные способы получения элементов на странице
const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(i => {
    console.log(i);
})

//Получаем один элемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);