'use strict';

//Упражнения 20
// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];
// function showGoodFilms(arr) {
//     const res = arr.filter( el => el.rating >= 8);
//     return res;
// }

// function showListOfFilms(arr) {
//     const arrName = arr.map(el => el.name);
//     return arrName.reduce((s, c) => `${s}, ${c}`);    
// }
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//     return arr.map((el, i) => {
//          el.id = i;
//          return el;
//     });
// }
// console.log(setFilmsIds(films));

// function checkFilms(arr) {
//    return arr.every(el => el.id || el.id === 0 ? true : false);
// }
// console.log(checkFilms(films));

//Упражнения 21
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

// const getPositiveIncomeAmount = (data) => {
//     const arrNum = data.map( el => el.amount);
//     const positivNum = arrNum.filter( num => num > 0);
//     return positivNum.reduce((s, c) => s + c);
// };
// console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    const positivNum = data.some(el => el.amount < 0);
    if(positivNum) {
        const arrNum = data.map( el => el.amount);
        return arrNum.reduce((s ,c) => s + c, 0);
    } else {
        getTotalIncomeAmount(data);
    }
};