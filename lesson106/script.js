'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('Этот код уже не сработает тк строка 5 выдаст ошибку, переменной а не существует');
} catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log('Error');
}

const map = {
    1: 1,
    2: 10,
    3: 15,
    5: 10
};
function convertNum(numbers) {
    return numbers.map((n) => {
        if(map[n]) {
            return n * map[n];
        }
        return n;
    }).join('+') + '= ?';
}

console.log(convertNum([1, 2, 3, 4, 5]));