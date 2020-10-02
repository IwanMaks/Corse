'use strict';

const day = document.querySelector('.day');
const weekday = document.querySelector('.weekday');
const time = document.querySelector('.time');
const newYaer = document.querySelector('.new-yaer');

const getInfo = () => { 

    const date = new Date();

    const options = {
        weekday: 'long'
    };

    const addZero = n => n < 10 ? '0' + n : n;

    if (date.getHours() > 5 && date.getHours() < 11) {
        day.textContent = 'Доброе утро';
    } else if (date.getHours() >= 11 && date.getHours() < 17) {
        day.textContent = 'Добрый день';
    } else if (date.getHours() >= 17 && date.getHours() < 21) {
        day.textContent = 'Добрый вечер';
    } else {
        day.textContent = 'Доброй ночи';
    }

    weekday.textContent = 'Сегодня: ' + date.toLocaleString('ru', options)[0].toUpperCase() + date.toLocaleString('ru', options).substr(1);

    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        let strTime = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds) + ' ' + ampm;
        return strTime;
    }

    time.textContent = 'Текущее время: ' + formatAMPM(date);

    function getTimeRemainig(deadline) {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const day = Math.floor(timeRemaining / 60 / 60 / 24);
        return { timeRemaining, day };
    }

    const timer = getTimeRemainig('1 jan 2021');

    const strDay = ['День', 'Дня', 'Дней'];

    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    newYaer.textContent = 'До Нового Года осталось: ' + timer.day + ' ' + declOfNum(timer.day, strDay);

};

setInterval(getInfo, 1000);

