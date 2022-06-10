"use strict";

//==Динамическая типизация в JS===

//To Sting

console.log(typeof(String(null))); // string
console.log(String(null)); // null как строка

//create counter=====

function createCounter() {
    let counter = 0;

    const myCounter = function() {
        counter = counter + 1;
        return counter;
    }
    return myCounter;
}
const counterOne = createCounter();
//console.log(counterOne());
console.log(counterOne(),counterOne(),counterOne());

function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
console.log(result);