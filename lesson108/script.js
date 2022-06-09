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