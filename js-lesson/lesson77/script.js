'use strict';

//Классы=================================
//Это красивая обертка функций конструкторов(синтаксичечкий сахар)
//Имя класса всегда начинается с большой буквы

class Rectangle {
    //в конструктор приходят свойства
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    //запишем методы класса
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // он вызывает конструктор родителя, и должен быть всегда на первом месте в конструкторе, и указываем свойства которые хотим использовать.
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const div = new ColoredRectangleWithText(25, 10, 'Hi there', 'red');

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

//Принципы ООП
//1) Абстракция - это когда отделяем концепцию от ее экземпляра
//2) Наследование - это способность нашего объекта или класса, базироваться на другом объекте или классе.