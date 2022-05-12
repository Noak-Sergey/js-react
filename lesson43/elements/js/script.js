'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');



// box.style.backgroundColor = 'green';
// box.style.width = '500px';
//С помощью метода cssText можно задвать все необходимые стили в одной строке
box.style.cssText = 'background-color: gray; width: 400px'

btns[1].style.borderRadius = '50%';
btns[1].style.backgroundColor = 'green';

circles[0].style.backgroundColor = 'green';

//Используем цикл для изменения нескольких элементов сразу
// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

//Через forEach
hearts.forEach(h => {
    h.style.backgroundColor = 'gray';
})

//Создаем элемент на странице с помощью JS
const div = document.createElement('div');
//Добавляем класс элементу div
div.classList.add('black');
//Добавляем элемент в DOM в конец body
//    document.body.append(div);
//Добавляем в конец созданный элемент в wrapper
  wrapper.append(div);
//Добавляем в начало созд.элемент
//  wrapper.prepend(div);
//Еще вариант
//hearts[0].after(div);

//Можем удалять элементы со страницы .remove()
//circles[1].remove();

//Замена элементов на странице
//hearts[2].replaceWith(btns[3])

//Добавляем текст в созданный елемент
// div.innerHTML = "Hello World !";
div.innerHTML = "<h1>Hello</h1>";
//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>Text..</h2>");