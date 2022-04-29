/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              if( a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
              } else {
                  console.log('error');
                  i--;
              }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

//==========Упражнение по написанию кода 7
//Объем и площадь поверхности куба
function calculateVolumeAndArea(num) {
    if(!Number.isInteger(num) || num === 'string' || num < 0) {
        return `При вычислении произошла ошибка`;
    }
    const volume = num*num*num;
    const area = (num*num) * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
}
console.log(calculateVolumeAndArea(5));

// Написать функцию которая будет определять номер купе по переданному ей номеру места
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}
console.log(getCoupeNumber(2));

//======================================================================
//функция принимает минуты и возвращает в часах
function getTimeFromMinutes(time) {
    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные";
    }
    
    const minute = time % 60;
    const hours = (time - minute) / 60 ;

    let hoursStr = '';

    switch(hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1: 
            hoursStr = 'час';
            break;
        case 2:    
        case 3:    
        case 4:
            hoursStr = 'часа';
            break;    
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minute} минут`
}
console.log(getTimeFromMinutes(1260));

// функция принимает 4 числа и возвращает самое большое
function findMaxNumber(one, two, three, four) {
    if(typeof(one) !== 'number' || typeof(two) !== 'number' || typeof(three) !== 'number' ||typeof(four) !== 'number') {
        return 0;
    }
    return Math.max(one, two, three, four)
}
console.log(findMaxNumber(1, 5, "6", 11));

//задача фибоначи===============
function fib(n) {
    if(typeof(n) !== 'number' || n <= 0 || !Number.isInteger(n)) {
        return '';
    }
    let res = '';
    let one = 0;
    let two = 1;

    for(let i = 1; i <= n; i++) {
        if(i === n) {
            res += `${one}`;
        } else {
            res += `${one} `;
        }

        let cur = one + two;
        one = two;
        two = cur;
    }
    return res
}
console.log(fib(7));