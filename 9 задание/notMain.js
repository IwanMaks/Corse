'use strict';

let date = new Date();
let options = {
    weekday: 'long'
};
let weekday = date.toLocaleString('ru', options);
let options2 = {
    month: 'long'
};
let month = date.toLocaleString('ru', options2);
weekday = weekday.charAt(0).toUpperCase() + weekday.substr(1);
month = month.charAt(0).toUpperCase() + month.substr(1);
const normHoures = (houre) => {
    if (houre%10 === 1 && houre != 11) {
        return 'час';
    } else if ((houre%10 === 2 && houre != 12) || (houre%10 === 3 && houre != 13) || (houre%10 === 4 && houre != 14)) {
        return 'часа';
    } else {
        return 'часов';
    }
};

const addZero = n => n < 10 ? '0' + n : n;

const getMyTime = () => { 
    console.log(`Сегодня ${weekday}, ${date.getDay()} ${month} ${date.getFullYear()} года, ${date.getHours()} ${normHoures(date.getHours())} ${date.getMinutes()} минуты ${date.getSeconds()} секунд`);
    console.log(addZero(date.getDay()) + '.' + addZero(date.getMonth()) + '.' + date.getFullYear() + ' - ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()));
}

let interval = setInterval(getMyTime, 1000);