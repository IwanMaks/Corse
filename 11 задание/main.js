'use strict';

//Обязательное задание
const start = document.querySelector('#start');
const incomePlus = document.getElementsByTagName('button')[0];
const expensesPlus = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.querySelector('.budget_month-value');
const budgetDayValue = document.querySelector('.budget_day-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelectorAll('.income-title')[1];
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
let expensesItem = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
let incomeItem = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');
const incomeAmount = document.querySelector('.income-amount');
const expensesAmount = document.querySelector('.expenses-amount');

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    incomeMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpenses: () => {
        expensesItem.forEach( item => {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },
    getIncome: () => {
        incomeItem.forEach( item => {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            console.log('cashIncome: ' + cashIncome);
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    start: () => {

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getIncomeMonth();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
    },
    getAddExpenses: () => {
        let addExpenses = additionalExpensesItem.value.split(',');
        
        addExpenses.forEach(item => {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: () => {
        additionalIncomeItem.forEach( item => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    showResult: () => {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = appData.getTargetMonth();
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = appData.calcSaveMoney();
        });
        incomePeriodValue.value = appData.calcSaveMoney();
    },
    addExpensesBlock: () => {
        let cloneExpensesItem = expensesItem[0].cloneNode(true);
        cloneExpensesItem.children[0].value = '';
        cloneExpensesItem.children[1].value = '';
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItem = document.querySelectorAll('.expenses-items');
        expensesItem.forEach( i => {
            i.children[0].addEventListener('keypress', () => {validateWord(i.children[0])});
            i.children[1].addEventListener('keypress', () => {validateNum(i.children[1])});
        });
        if (expensesItem.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: () => {
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        cloneIncomeItem.children[0].value = '';
        cloneIncomeItem.children[1].value = '';
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        incomeItem.forEach( i => {
            let elem = i.children;
            for (let it = 0; it < elem.length; it++) {
                elem[it].addEventListener('keypress', () => {validate(elem[it])});
            }
        });
        if (incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getIncomeMonth: () => {
        let sum = 0;
        for (let key in appData.income) {
            sum += +appData.income[key];
        }
        appData.incomeMonth = sum;
    },
    getExpensesMonth: () => {
        let sum = 0;
        for (let key in appData.expenses) {
            sum += +appData.expenses[key];
        }
        appData.expensesMonth = sum;
    },
    getBudget: () => {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: () => {
        return Math.ceil(targetAmount.value / appData.budgetMonth);
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
        return appData.budgetMonth * periodSelect.value;
    },
    checkSalaryAmount: () => {
        let inputValue = salaryAmount.value;
        inputValue = inputValue.trim();
        if (inputValue === '') {
            start.disabled = true;
        } else {
            start.disabled = false;
        }
    }
};
const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getStartDisabled = () => {
    start.disabled = true;
};

const validateNum = elem => {
    setTimeout( () => {
        let result = /[^0-9]/g.exec(elem.value);
        elem.value = elem.value.replace(result, '');
    }, 0);
};

const validateWord = elem => {
    setTimeout( () => {
        let result = /[^а-яА-я.,ё :-;]/g.exec(elem.value);
        elem.value = elem.value.replace(result, '');
    }, 0);
};

const validate = function ( element ) {
    if (element.placeholder === 'Сумма') {
        validateNum(element);
    } else if (element.placeholder === 'Наименование') {
        validateWord(element);
    }
    
}

getStartDisabled();

start.addEventListener('click', appData.start);

salaryAmount.addEventListener('input', appData.checkSalaryAmount);

salaryAmount.addEventListener('keypress', () => {validateNum(salaryAmount)});
targetAmount.addEventListener('keypress', () => {validateNum(targetAmount)});
expensesAmount.addEventListener('keypress', () => {validateNum(expensesAmount)});
expensesTitle.addEventListener('keypress', () => {validateWord(expensesTitle)});

incomeItem.forEach( i => {
    let elem = i.children;
    for (let it = 0; it < elem.length; it++ ) {
        elem[it].addEventListener('keypress', () => {validate(elem[it])});
    }
});

//for (let key in incomeItem) {
//    let item = incomeItem[key];
//    console.log(item.children);
//    console.log(1);
//    //for (ley i in item.children) {
//    //    item.children[i].addEventListener('keypress', () => {validate(item.children[i])});
//    //};
//};

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', () => {
    periodAmount.textContent = periodSelect.value;
});