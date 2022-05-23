'use strict';

// const num = new Number(3);
// console.log(num);
//Это устаревший синтаксис ES5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`Пользоватеь ${this.name} ушел`);
};

const sergey = new User('Sergey', 28);
const ivan = new User('Ivan', 23);

sergey.hello();
ivan.hello();
ivan.exit();

//Современный синтаксис пришедший с ES6 class выглядит вот так
class Usernew {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function () {
            console.log(`Hello ${this.name}`);
        };
    }
}

