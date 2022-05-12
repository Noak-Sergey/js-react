/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//#1 мой вариант
//document.querySelector('.promo__adv').remove();
// const advertising = document.querySelector('.promo__adv');
// advertising.remove();
//вариант2 по уроку
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach( i => {
    i.remove();
});

//#2
const changeComedy = document.querySelector('.promo__genre');
changeComedy.textContent = "Драма"


//#3
// const promoBg = document.querySelector('.promo__bg');
// promoBg.style.cssText  = 'background-image: url(./img/bg.jpg); background-position-x: center; background-position-y: top; background-size: cover;';
//вариант2 по уроку
const poster = document.querySelector('.promo__bg');
poster.style.backgroundImage = 'url(./img/bg.jpg)';

//#4
// const sortMovies = movieDB.movies.sort((a,b) => {
//     return a - b;
// });
//вариант2 по уроку
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = "";
movieDB.movies.sort();
//#5
// const allMoviesName = document.querySelectorAll('.promo__interactive-item');
// allMoviesName.forEach( (el, i) => {
//     el.textContent = `${i + 1}. ${sortMovies[i]}`;
// });
//вариант2 по уроку
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>`;
});