'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button');

    const width = box.scrollWidth;
    const height = box.scrollHeight;

    console.log(width, height);
//раскрываем box по клику на кнопку
    btn.addEventListener('click', () => {
        //box.style.height =  box.scrollHeight + 'px';
        console.log(box.scrollTop); //покажет сколько текста уже прочитано
    });
