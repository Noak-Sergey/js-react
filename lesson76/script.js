'use strict';

//Контекст вызова функции this

//методы вызова функций
// function showThis() { 
//     console.log(this);
// }
// showThis(); 
// 1) при вызове без режима 'use strict', this будет ссылаться на глобальный объкт window
//при включенном режиме 'use strict', this будет undefined

// function showThis(a, b) { 
//     console.log(this); //undefined
//     function sum() {
//         console.log(this); //undefined
//         return this.a + this.b; //TypeError: Cannot read properties of undefined (reading 'a')
//     }
//     console.log(sum()); //
// }
// showThis(4, 5); 

// function showThis(a, b) { 
//     console.log(this); //undefined
//     function sum() {
//         console.log(this); //undefined
//         return a + b; 
//     }
//     console.log(sum()); 
// }
// showThis(4, 5); 

// 2)Если мы используем метод внутри объекта, то контекст вызова всегда будет ссылать на этот объект
// const obj = {
//     a:20,
//     b:15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

//еще ситуация
// const obj = {
//     a:20,
//     b:15,
//     sum: function() {
//         function shout() {
//             console.log(this); //undefined т.к это уже не метод объкта а простой вызов функции, контекст потерян
//         }
//         shout();
//     }
// };
// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;    
// }
// let ivan = new User('Ivan', 25);

//Ручная привязка this: call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// //еще есть метод bind, он создает новую функцию связанную с определенным контекстом
// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));


//Пример с кнопкой
const btn = document.querySelector('button');
//когда в обработчике события колбек функция написана в классическом виде, в таком случае контекст вызова будет 
//сам элемент, на котором произошло событие, как и event.target
// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

//у стрелочной функции нет своего контекста вызова, она всегда будет брать его у своего родителя
// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     }
// };
// obj.sayNumber();
//используя здесь стрелочную функцию вспоминаем, что она берет контекст у родителя, а родителем является метод sayNumber
//а у метода всегда контекст ссылается на объект в котором он существует.

//короткий синтаксис стрелочной функции, если она принимает всего один аргумент
//  const double = a => a * 2; 

//  console.log(double(4));

//контекст вызова в обработчиках событий при использовании стрелочных функций
// btn.addEventListener('click', () => {
//     this.style.backgroundColor = 'red';
// });
//здесь контекст вызова потеряется тк у стрелочной функции своего контекста нет, и соответветственно она обращается к
//undefined, если не будет включен режим use strict, тогда она будет обращаться к объкту window.
//в обработчиках событий используя function declaration мы имеем доступ к this, это как раз тот элемент на котором 
//произошло событие
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});