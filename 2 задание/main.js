//Обязательное задание
let money = 35000;
let income = 'Грузчик';
let addExpense = 'Заправка, комуналка, ремонт';
let deposit = true;
let mission = 150000;
let period = 10;

console.log('Типом данных переменной money является: ' + typeof money);
console.log('Значение переменной money: ' + money);
console.log();
console.log('Типом данных переменной income является: ' + typeof income);
console.log('Значение переменной income: ' + income);
console.log();
console.log('Типом данных переменной deposit является: ' + typeof deposit);
console.log('Значение переменной deposit: ' + deposit);
console.log();

console.log('Длинна строки addExpense: ' + addExpense.length);
console.log();

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log();

console.log('Массив из строки addExpense: ');
console.log((addExpense.toLowerCase()).split(', '));
console.log();

let budgetDay = money / 30;
console.log('Дневной доход: ' + budgetDay.toFixed(3));

//Сложное задание
let num = 266219;
let arr = ('' + num).split('');
let result = 1;

arr.forEach( i => {
    result *= i;
} );

console.log();
console.log('Сумма цифр чила ' + num + ': ' + result);
console.log('Сумма в третьей степени: ' + result ** 3);

arr = ('' + (result**3)).split('');
let a = 0;
console.log('Первые два числа: ');

arr.forEach( i => {
    if (a < 2) {
        console.log(i);
    }
    a++;
});