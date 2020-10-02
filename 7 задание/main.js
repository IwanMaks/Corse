'use strict';

//Обязательное задание
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: () => {
        let ex;
        let ex2;
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Кино, Театр");
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        let buf;
        for (let i = 0; i < 2; i++){
            if (i === 0) {
               ex = prompt('Введите обязательную статью расходов?', "Садик Государственный"); 
            } else {
                ex2 = prompt('Введите обязательную статью расходов?', "Садик Государственный");
            }
            while (ex == ex2) {
                ex2 = prompt('Введите обязательную статью расходов?', "Садик Государственный");
            }
            buf = +prompt('Во сколько это обойдется?', 2000);
            while (!isNumber(buf)) {
                buf = +prompt('Во сколько это обойдется?', 2000);
            }
            if (i === 0) {
                appData.expenses[ex] = buf;
            } else {
                appData.expenses[ex2] = buf;
            }
            
        }
    },
    getExpensesMonth: () => {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += appData.expenses[key];
        }
        appData.expensesMonth = sum;
    },
    getBudget: () => {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: (a, b) => {
        return Math.ceil(a/b);
    },
    getStatusIncome: () => {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay <= 600 && appData.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }
};
const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    do {
        appData.budget = prompt('Ваш месячный доход?', 3000);
    } while (!isNumber(appData.budget));
};

start();

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Бюджет на месяц: ' + appData.budgetMonth + ' рублей');
console.log('Расходы за месяц: ' + appData.expensesMonth + ' рублей');
if (appData.getTargetMonth(appData.mission, appData.budgetMonth) >= 0) {
    console.log('Цель будет достигнута за ' + appData.getTargetMonth(appData.mission, appData.budgetMonth) + ' месяцев');
} else {
    console.log('Цель не будет достигнута');
}
console.log('Бюджет на день: ' + appData.budgetDay + ' рублей');
console.log(appData.getStatusIncome(appData.budgetDay));
console.log();
console.log('Наша программа включает в себя данные: ');
for (let i in appData) {
    console.log(i + ': ' + appData[i]);
}