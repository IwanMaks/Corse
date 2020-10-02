'use strict';

//Обязательное задание
let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: () => {
        let itemIncome;
        let cashIncome;
        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок?', 'Грузчик');
            } while (isNumber(itemIncome));
            do{
                cashIncome = prompt('Сколько в месяц зарабатываете на этом?', 10000);
            }while(!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }

        let ex;
        let ex2;
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Кино, Театр");
        while (isNumber(addExpenses)) {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Кино, Театр");
        }
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if ( appData.deposit ) {
            appData.getInfoDeposit();
        };
        let buf;
        for (let i = 0; i < 2; i++){
            if (i === 0) {
               do {
                   ex = prompt('Введите обязательную статью расходов?', "Садик Государственный"); 
               } while (isNumber(ex));
            } else {
                do {
                    ex2 = prompt('Введите обязательную статью расходов?', "Садик Государственный");
                } while (isNumber(ex2));
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
    },
    getInfoDeposit: () => {
        if (appData.deposit) {
            do { 
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (!isNumber(appData.percentDeposit));
            do { 
                appData.moneyDeposit = prompt('Сколько денег заложено?', 1000);
            } while(!isNumber(appData.moneyDeposit));
        }
    }, 
    calcSaveMoney: () => {
        return appData.budgetMonth * appData.period;
    }
};
const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const start = () => {
    do {
        appData.budget = prompt('Ваш месячный доход?', 30000);
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
for ( let i in appData.addExpenses ) {
    let element = appData.addExpenses[i];
    element = element.charAt(0).toUpperCase() + element.substr(1);
    appData.addExpenses[i] = element;
};
console.log('Обязательные расходы: ' + appData.addExpenses.join( ', ' ) );
console.log('Наша программа включает в себя данные: ');
for (let i in appData) {
    console.log(i + ': ' + appData[i]);
}