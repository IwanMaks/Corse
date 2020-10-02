'use strict';

//Усложнённое задание
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let date = new Date();
let options = {
    weekday: 'long'
};

for (let i of week) {
    if (i.toLowerCase() === 'воскресенье' || i.toLowerCase() === 'суббота') {
        document.writeln(i.italics()+'<br>');
    } else if (i.toLowerCase() === date.toLocaleString('ru', options)) {
        document.writeln(i.bold()+'<br>');
    } else {
        document.writeln(i+'<br>');
    }
}