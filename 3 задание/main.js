'use strict';

//Обязательное задание
let money = +prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let question = prompt('Есть ли у вас депозит в банке?'); 
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');
let budgetMonth = money - (amount1 + amount2);
let mission = 150000;
addExpenses = addExpenses.toLowerCase().split(', ');

if (money == NaN || money == null) {
    money == 0;
}

if (amount1 == NaN || amount1 == null) {
    amount1 = 0;
}

if (amount2 == NaN || amount2 == null) {
    amount2 = 0;
}

if (question == 'да' || question == 'есть') {
    let deposit = true;
} else {
    let deposit = false;
}

console.log('Бюджет на месяц: ' + budgetMonth);
let period = Math.ceil(mission/budgetMonth);
console.log('Цель будет достигнута за ' + period + ' месяцев');
let budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день: ' + budgetDay);

if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 || budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay <= 600 || budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
    console.log('Что то пошло не так');
}

//Сложное задание
const languege = document.documentElement.lang;
//1.a
if (languege == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница');
} else {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

//1.b
switch (languege) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}

//1.c
let lang_arr = [];
lang_arr['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
lang_arr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
lang_arr[languege].forEach( i => {
    console.log(i);
});