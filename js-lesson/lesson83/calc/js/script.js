'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {  //еще можно записать событие change
        const request = new XMLHttpRequest();

        //request.open(method, url, async, login, pass); 
        //наглядно заполненные параметры,последнии три аргумента не обязательные;
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(); //если будет POST запрос то в метод send будем помещять какие-то данные

        // status ответа от сервера 100, 200, 300, 400, 500
        // statusText, это Ок или not found и тд у каждой кодировки свой
        // response ответ от сервера
        // readyState текущее состояние объекта

        request.addEventListener('load', () => {
            if(request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Что-то пошло не так...";
            }
        });
    });