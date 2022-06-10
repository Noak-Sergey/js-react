/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания Lesson 37 practice

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, '').toLowerCase();
            if(genre === null || genre === '' || genre === ' ') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }   
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    },
    

};
//personalMovieDB.writeYourGenres();

//===Упр.по написанию кода 13======
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
// console.log(shoppingMallData.shops[0].width);
// console.log(shoppingMallData.shops[0].length);

function isBudgetEnough(data) {
    //вычислить общую площадь
    let square = 0; //335
    
    for(let i = 0; i < data.shops.length; i++) {
        square += (data.shops[i].width * data.shops[i].length);
    }
    //variant two
    // data.shops.forEach(shop => {
    //     square += shop.width * shop.length
    // });

    const volume = square * data.height;
    const moneyWarm = volume * data.moneyPer1m3;

    if(data.budget >= moneyWarm) {
        return console.log('Бюджета достаточно');
    } else {
        return console.log('Бюджета недостаточно');
    }
    
    
}
isBudgetEnough(shoppingMallData);

//===Упр.по написанию кода 14====== НЕ РЕШЕНА
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const sortArr = arr.sort();
    const stGroup = [];
    for(let i = 1; i < sortArr.length; i=i+3) {
        for(let j = 0; j < 3; j++) {
            stGroup.push([sortArr[j]])
        }
        
    }
    return console.log(stGroup);
}
sortStudentsByGroups(students);