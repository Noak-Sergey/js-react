"use strict";

// const arr = ['a', 'b', 'c', 'd'];
// const data = {...arr}
// console.log(data);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

// function showExperience(personalPlanPeter) {

//     // const {exp} = personalPlanPeter.skills;
    
//     return console.log(personalPlanPeter.skills.exp);
// }
// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';

//     const {programmingLangs} = plan.skills;
//     for(let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
    
//     return console.log(str);
// }
// showProgrammingLangs(personalPlanPeter);

// personalPlanPeter.showAgeAndLangs = function(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мне ${age} и я владею языками: `

//     languages.forEach((lang) => {
//         str += `${lang.toUpperCase()} `;
//     })
//     return console.log(str);
// }
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)


//=========Работа с массивами========================

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let name = '';
//     for(let i = 0; i < arr.length; i++) {
//         name += `${arr[i]} `
//     }
//     return console.log(`Семья состоит из: ${name}`)
// }
// showFamily(family);

//====Задача 2

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
    
//     for(let i = 0; i < arr.length; i++) {
//              console.log(arr[i].toLowerCase());
//          }
    
// }
// standardizeStrings(favoriteCities);

// //====Задача 3 REVERS string===========
// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof(str) !== 'string') {
//         return 'Ошибка!';
//     } else {
//         return str.split("").reverse().join("");
//     }

// }

// //===способ номер два===
// const newArr = [...someString];
// let arrRev = [];
//     for(let i = newArr.length - 1; i >= 0 ; i--) {
//         arrRev.push(newArr[i])
//     }
//     const arrStr = arrRev.join("")
// console.log(arrStr);

//====Задача 4 ===========
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let strCurr = 'Доступные валюты:\n';

    if(arr.length === 0) {
        return 'Нет доступных валют.';
    }
    
    for(let i = 0; i < arr.length; i++){
        if( arr[i] === missingCurr) {
            continue;
        } else {
            strCurr += `${arr[i]}\n`
        }
    }
    return strCurr;
}
console.log(availableCurr(arr, 'USD'));