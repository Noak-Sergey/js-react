"use strict"

function doNothing() {}
console.log(doNothing());

function returnNeighboringNumbers(num) {
    const neiborMinus = num - 1;
    const neiborPlus = num + 1;
    let res = [neiborMinus, num, neiborPlus];
    return res
}
console.log(returnNeighboringNumbers(5));

//============================================

function getMathResult(numOne, numTwo) {
    let result = "";
    if(typeof(numTwo) === "string" || numTwo <= 0){
        return numOne
    }
    for(let i = 1; i <= numTwo; i++) {
        result += (numOne * i);
        for(let j = 0; j < 3; j++) {
            if(i === numTwo) return result
            result += "-";
        }
    }
}
getMathResult(5,3)

//Variant #2=================================
function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));
