'use strict';

const persone = {
    name: 'Alex',
    tel: '+7123456789',
    parents: {
        mom:'Olga',
        dad:'Mike'
    }
};
console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone))); //превращает JSON обратно в стандартный объект

//глубокое копирование

const clone = JSON.parse(JSON.stringify(persone)); //эта конструкция сделает копию глубокую
console.log( persone === clone);
