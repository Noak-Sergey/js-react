"use strict";

//==Задачи с собеседований===

// Какое будет выведено значение: let x = 5; alert( x++ ); ? // 5
// Чему равно такое выражение: [ ] + false - null + true ?
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Чему равна сумма [ ] + 1 + 2?
// Что выведет этот код: alert( '1'[0] )?
// Чему равно 2 && 1 && null && 0 && undefined ?
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Что выведет этот код: alert( +'Infinity' ); ? 
// Верно ли сравнение: 'Ёжик' > 'яблоко';?
// Чему равно 0 || ""; || 2 || undefined || true || falsе ?

// console.log([ ] + false - null + true); //NaN

// let y = 1; let x = y = 2; //alert(x)
// console.log(x); //2

// console.log([ ] + 1 + 2); // '12'

// console.log('1'[0]); // '1'

// console.log(2 && 1 && null && 0 && undefined); // null

// console.log(!!( a && b ) ); 
// console.log(a && b);

// console.log(null || 2 && 3 || 4); //3

// a = [1, 2, 3]; b = [1, 2, 3]
// console.log(a == b); //false


// console.log(+'Infinity'); //Infinity(number)

// console.log('Ёжик' > 'яблоко'); //false

// console.log(0 || "" || 2 || undefined || true || falsе); //2


//===Практика №15==
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = {...data, waitors:[...data.waitors] };

    copy.waitors = [{name: 'Mike', age: 32}];
    
    console.log(restorantData);
    return console.log(copy);
}

transferWaitors(restorantData);

