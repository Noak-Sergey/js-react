'use strict';

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
const result = arr.map(item => Object.entries(item));
console.log(result);