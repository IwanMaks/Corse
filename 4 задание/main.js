'use strict';

//Обязательное задание
let money = +prompt('Ваш месячный доход?');
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let question = prompt('Есть ли у вас депозит в банке?'); 
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');
let mission = 150000;

const getExpensesMonth = (a, b) => {
    return a + b;
};

const getAccumulatedMonth = (a, callback) => {
    return a - callback;
};

const getTargetMonth = (a, b) => {
    return Math.ceil(a/b);
};

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));


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

console.log('Бюджет на месяц: ' + accumulatedMonth);
console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
let budgetDay = Math.floor(accumulatedMonth/30);
console.log('Бюджет на день: ' + budgetDay);

const getStatusIncome = () => {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600 || budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600 || budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());

//Сложное задание 
let story = '      Когда жил был маленький мишка, но потом он резко умер';

const showString = (text) => {
    if (typeof text === 'string') {
        text = text.trim();
        if (text.length > 30) {
            text = text.substring(0, 29) + '...';
        }
        return text;
    }
};

console.log(showString(story));