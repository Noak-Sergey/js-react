"use strict";
// function pow(x, n) {
//     if(n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 3);



//Упражнение №16 вычислить факториал
function factorial(num) {
    
    if(typeof(num) !== "number" || !Number.isInteger(num)) {
        return 'Введено неверное значение';
    } 
    if( num <= 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
    
}

console.log(factorial(3));