'use strict';

//Обязательное задание
let money;
let addExpenses;
let question; 
let expenses = [];
let expensesAmount;
let accumulatedMonth;
let budgetDay;
let mission = 150000;
let income = 'Грузчик';

const start = () => {
    do {
        money = prompt('Ваш месячный доход?', 3000);
    } while (!isNumber(money));
};

const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const showTypeOf = item => {
    console.log(item);
};

const getAccumulatedMonth = (a, callback) => {
    return a - callback;
};

const getTargetMonth = (a, b) => {
    return Math.ceil(a/b);
};

let getExpensesMonth = function(){
    let sum = 0;
    let buf;
    for (let i = 0; i < 2; i++){

        expenses[i] = prompt('Введите обязательную статью расходов?', "Садик Государственный");
        buf = +prompt('Во сколько это обойдется?', 2000);
        while (!isNumber(buf)) {
            buf = +prompt('Во сколько это обойдется?', 2000);
        }
        sum += buf;

    }
    return sum;
};

const getStatusIncome = budgetDay => {
    if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay > 600 && budgetDay <= 1200) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay <= 600 && budgetDay >= 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};

start();

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Кино, Театр");
addExpenses = addExpenses.toLowerCase().split(', ');
question = confirm('Есть ли у вас депозит в банке?');
expensesAmount = getExpensesMonth();
accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
budgetDay = Math.floor(accumulatedMonth/30);

console.log('Бюджет на месяц: ' + accumulatedMonth + ' рублей');
if (getTargetMonth > 0) {
    console.log('Цель будет достигнута за ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день: ' + budgetDay + ' рублей');
console.log(getStatusIncome(budgetDay));