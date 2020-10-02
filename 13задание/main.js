

//Обязательное задание
const start = document.querySelector('#start');
const cancel = document.querySelector('#cancel');
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
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
let incomeItem = document.querySelectorAll('.income-items');
const periodAmount = document.querySelector('.period-amount');
const incomeAmount = document.querySelector('.income-amount');
const expensesAmount = document.querySelector('.expenses-amount');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');

class AppData {
    constructor(budgetMonth = 0, budgetDay = 0,  expensesMonth = 0, addIncome = [], addExpenses = [], income = {}, expenses = {}, incomeMonth = 0, deposit = false, percentDeposit = 0, moneyDeposit = 0, budget = 0) {
        this.income = income;
        this.addIncome = addIncome;
        this.expenses = expenses;
        this.incomeMonth = incomeMonth;
        this.addExpenses = addExpenses;
        this.deposit = deposit;
        this.percentDeposit = percentDeposit;
        this.moneyDeposit = moneyDeposit;
        this.budget = budget;
        this.budgetDay = budgetDay;
        this.budgetMonth = budgetMonth;
        this.expensesMonth = expensesMonth;
    }

    getExpInc() {
        const count = item => {
            const startStr = item.className.split('-')[0];
            const itemTitle = item.querySelector(`.${startStr}-title`).value;
            const itemAmount = item.querySelector(`.${startStr}-amount`).value;
            if (itemTitle !== '' && itemAmount !== '') {
                this[startStr][itemTitle] = itemAmount;
            }
        };


        incomeItem.forEach(count);
        expensesItem.forEach(count);
        console.log(expensesItem);

        for (const key in this.income) {
            this.incomeMonth += +this.income[key];
        }
        for (const key in this.expenses) {
            this.expensesMonth += +this.expenses[key];
        }
    }

    start() {

        this.budget = +salaryAmount.value;

        this.getExpInc();
        this.getAddExpenses();
        this.getAddIncome();
        this.getAddExpInc();
        this.getInfoDeposit();
        this.getBudget();

        localStorage.setItem('budgetMonth', JSON.stringify(this.budgetMonth));
        localStorage.setItem('budgetDay', JSON.stringify(this.budgetDay));
        localStorage.setItem('expensesMonth', JSON.stringify(this.expensesMonth));
        localStorage.setItem('addIncome', JSON.stringify(this.addIncome));
        localStorage.setItem('addExpenses', JSON.stringify(this.addExpenses));
        localStorage.setItem('targetMonth', JSON.stringify(this.getTargetMonth()));

        document.cookie = 'budgetMonth=' + this.budgetMonth;
        document.cookie = 'budgetDay=' + this.budgetDay;
        document.cookie = 'expensesMonth=' + this.expensesMonth;
        document.cookie = 'addIncome=' + this.addIncome;
        document.cookie = 'addExpenses=' + this.addExpenses;
        document.cookie = 'targetMonth=' + this.getTargetMonth();
        document.cookie = 'isLoad=true';

        this.showResult();
        this.canselType();
    }
    reset() {
        [...document.querySelectorAll('section.main input[type="text"]')]
            .forEach(element => element.value = '');
        [...document.querySelectorAll('section.main input[type="text"]')]
            .forEach(element => element.disabled = false);
        depositPercent.style.display = 'none';
        depositBank.disabled = false;
        depositCheck.disabled = false;
        depositCheck.checked = false;
        this.depositHandler();

        console.log(document.querySelectorAll('section.main input[type="text"]'));

        expensesPlus.style.display = 'block';
        incomePlus.style.display = 'block';

        const incomeBlocks = document.querySelectorAll('.income-items');
        for (let i = 0; i < incomeBlocks.length; i++) {
            if (i > 0) {
                incomeBlocks[i].remove();
            }
        }

        const expensesBlocks = document.querySelectorAll('.expenses-items');
        for (let i = 0; i < expensesBlocks.length; i++) {
            if (i > 0) {
                expensesBlocks[i].remove();
            }
        }

        this.income = {};
        this.addIncome = [];
        this.expenses = {};
        this.incomeMonth = 0;
        this.addExpenses = [];
        this.deposit = false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;

        cancel.style.display = 'none';
        start.style.display = 'block';
        localStorage.clear();
        CookiesDelete();
    }
    canselType() {
        start.style.display = 'none';
        cancel.style.display = 'block';
        salaryAmount.disabled = true;
        incomeItem.forEach(item => {
            item.children[0].disabled = true;
            item.children[1].disabled = true;
        });
        incomePlus.style.display = 'none';
        additionalIncomeItem.forEach(item => {
            item.disabled = true;
        });
        expensesItem.forEach(item => {
            item.children[0].disabled = true;
            item.children[1].disabled = true;
        });
        expensesPlus.style.display = 'none';
        additionalExpensesItem.disabled = true;
        targetAmount.disabled = true;
        depositBank.disabled = true;
        depositAmount.disabled = true;
        depositPercent.disabled = true;
        depositCheck.disabled = true;
    }
    getAddExpenses() {
        const addExpenses = additionalExpensesItem.value.split(',');

        addExpenses.forEach(item => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item);
            }
        });
    }
    getAddIncome() {
        additionalIncomeItem.forEach(item => {
            const itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        });
    }

    getAddExpInc() {
        const add = item => {
            const startStr = item.className;
            console.log('item: ' + item);
            console.log(startStr);
        };
        const arrIncome = [];
        const addExpenses = additionalExpensesItem.value.split(',');
        additionalIncomeItem.forEach(item => {
            arrIncome.push(item.value);
        });
        addExpenses.forEach(add);
        arrIncome.forEach(add);
    }

    showResult() {
        budgetMonthValue.value = JSON.parse(localStorage.getItem('budgetMonth'));
        budgetDayValue.value = JSON.parse(localStorage.getItem('budgetDay'));
        expensesMonthValue.value = JSON.parse(localStorage.getItem('expensesMonth'));
        additionalExpensesValue.value = JSON.parse(localStorage.getItem('addExpenses')).join(', ');
        additionalIncomeValue.value = JSON.parse(localStorage.getItem('addIncome')).join(', ');
        targetMonthValue.value = JSON.parse(localStorage.getItem('targetMonth'));
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = this.calcSaveMoney();
        });
        incomePeriodValue.value = this.calcSaveMoney();
    }
    addExpensesBlock() {
        const cloneExpensesItem = expensesItem[0].cloneNode(true);
        cloneExpensesItem.children[0].value = '';
        cloneExpensesItem.children[1].value = '';
        expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItem = document.querySelectorAll('.expenses-items');
        expensesItem.forEach(i => {
            i.children[0].addEventListener('keypress', () => { validateWord(i.children[0]); });
            i.children[1].addEventListener('keypress', () => { validateNum(i.children[1]); });
        });
        if (expensesItem.length === 3) {
            expensesPlus.style.display = 'none';
        }
    }
    addIncomeBlock() {
        const cloneIncomeItem = incomeItem[0].cloneNode(true);
        cloneIncomeItem.children[0].value = '';
        cloneIncomeItem.children[1].value = '';
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItem = document.querySelectorAll('.income-items');
        incomeItem.forEach(i => {
            const elem = i.children;
            for (let it = 0; it < elem.length; it++) {
                elem[it].addEventListener('keypress', () => { validate(elem[it]); });
            }
        });
        if (incomeItem.length === 3) {
            incomePlus.style.display = 'none';
        }
    }
    getBudget() {
        const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
    getTargetMonth() {
        return Math.ceil(targetAmount.value / this.budgetMonth);
    }
    getStatusIncome() {
        if (this.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (this.budgetDay > 600 && this.budgetDay <= 1200) {
            return ('У вас средний уровень дохода');
        } else if (this.budgetDay <= 600 && this.budgetDay >= 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что то пошло не так');
        }
    }
    getInfoDeposit() {
        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    }
    calcSaveMoney() {
        return this.budgetMonth * periodSelect.value;
    }
    checkSalaryAmount() {
        let inputValue = salaryAmount.value;
        inputValue = inputValue.trim();
        if (inputValue === '') {
            start.disabled = true;
        } else {
            start.disabled = false;
        }
    }

    changePercent() {
        const valueSelect = this.value;
        if (valueSelect === 'other') {
            depositAmount.disabled = false;
            depositPercent.value = '';
            depositPercent.style.display = 'inline-block';
            depositPercent.addEventListener('input', () => {
                if (depositPercent.value > 100 || depositPercent.value < 0 || !isNumber(depositPercent.value)) {
                    alert('Введите корректное значение в поле проценты');
                    depositPercent.value = '';
                }
            });
        } else if (valueSelect === '') {
            depositAmount.disabled = true;
        } else {
            depositAmount.disabled = false;
            depositPercent.style.display = 'none';
            depositPercent.value = valueSelect;
            depositPercent.removeEventListener('input', () => {
                if (depositPercent.value > 100 || depositPercent.value < 0  || !isNumber(depositPercent.value)) {
                    alert('Введите корректное значение в поле проценты');
                    depositPercent.value = '';
                }
            });
        }
    }

    depositHandler() {
        if (depositCheck.checked) {
            depositAmount.disabled = true;
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        } else {
            this.deposit = false;
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositBank.value = '';
            depositAmount.value = '';
            depositPercent.value = '';
            depositBank.removeEventListener('change', this.changePercent);
        }
    }

    eventsListeners() {
        const _this = this;
        start.addEventListener('click', _this.start.bind(this));
        cancel.addEventListener('click', _this.reset.bind(this));
        salaryAmount.addEventListener('input', _this.checkSalaryAmount);
        depositCheck.addEventListener('change', _this.depositHandler.bind(this));
    }
}


const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

const getStartDisabled = () => {
    start.disabled = true;
};

const validateNum = elem => {
    setTimeout(() => {
        const result = /[^0-9]/g.exec(elem.value);
        elem.value = elem.value.replace(result, '');
    }, 0);
};

const validateWord = elem => {
    setTimeout(() => {
        const result = /[^а-яА-я.,ё :-;]/g.exec(elem.value);
        elem.value = elem.value.replace(result, '');
    }, 0);
};

const validate = function(element) {
    if (element.placeholder === 'Сумма') {
        validateNum(element);
    } else if (element.placeholder === 'Наименование') {
        validateWord(element);
    }

};

function CookiesDelete() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
        document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}



const appData = new AppData();

if (JSON.parse(localStorage.getItem('budgetMonth')) !== null) {

    const cookieArr = document.cookie.split('; ');
    //console.log(cookieArr);
    let counter = 0;
    cookieArr.forEach(item => {

        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === 'budgetMonth') {
                console.log("Hello");
            }
            if (item.split('=')[0] === 'budgetMonth') {
                console.log("World");
            }
            if (localStorage.key(i) === item.split('=')[0]) {
                console.log('Norm');
                counter++;
            } else if (item.split('=')[0] === 'isLoad') {
                counter++;
            }

        }
    });
    if (counter < 12) {
        localStorage.clear();
        CookiesDelete();
    }
}

if (JSON.parse(localStorage.getItem('budgetMonth')) !== null) {
    appData.showResult();
    appData.canselType();
}

//console.log(document.cookie.split('; ')[0].split('=')[0]);
//console.log(localStorage.key(0));

appData.eventsListeners();

getStartDisabled();

salaryAmount.addEventListener('keypress', () => { validateNum(salaryAmount); });
targetAmount.addEventListener('keypress', () => { validateNum(targetAmount); });
expensesAmount.addEventListener('keypress', () => { validateNum(expensesAmount); });
expensesTitle.addEventListener('keypress', () => { validateWord(expensesTitle); });

incomeItem.forEach(i => {
    const elem = i.children;
    for (let it = 0; it < elem.length; it++) {
        elem[it].addEventListener('keypress', () => { validate(elem[it]); });
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
