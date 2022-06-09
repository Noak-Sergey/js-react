'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

// const phoneAnimation = images[0].animate([
//     {transform: 'translateY(0)'},           //указываем начальную точку
//     {transform: 'translateY(100px)'},       //указываем промежуточные точки
//     {transform: 'translateY(-100px)'},
//     {transform: 'translateY(0)'}            //указываем конечную точку
// ], {    //а в этом объекте указываем опции(настройки) см.доку
//     duration: 3000,
//     iterations: Infinity
// });      

//можно управлять анимацией
let phoneAnimation;
btnPhone.addEventListener('mouseenter', () => {
    if(!phoneAnimation) {
        phoneAnimation = images[0].animate([
                {transform: 'translateY(0) rotate(0deg)',
                 filter: 'opacity(100%)'
                },           
                {transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(50%)'
                },       
                {transform: 'translateY(-100px) rotate(270deg)',
                filter: 'opacity(75%)'
                },
                {transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
                }            
            ], {    
                duration: 3000,
                iterations: Infinity
            });      
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});