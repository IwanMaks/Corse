'use strict'

//Обязательное задание
const adv = document.querySelector('.adv');  // Получение блока рекламы
const book = document.querySelectorAll('.book'); // Получение колекции книг
const books = document.querySelector('.books'); // Получение родителя коллекции книг
const ul = document.querySelectorAll('ul'); // Получение коллекции глав книг
const paragraph = document.createElement('li'); // Создание тэга li для новой главы книги
let fragment = document.createDocumentFragment(); // Буфер для сортировки книг

adv.remove(); //Удаление рекламы

fragment.append(book[1]); //
fragment.append(book[0]); // 
fragment.append(book[4]); // Исправление
fragment.append(book[3]); // порядка
fragment.append(book[5]); // книг
fragment.append(book[2]); //
books.append(fragment);   //

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'; // Изменение картинки на фоне

book[4].children[0].children[0].textContent = 'Книга 3. this и Прототипы Объектов'; // Исправление заголовка книги

ul[0].children[0].before(ul[0].children[1]); //
ul[0].children[9].after(ul[0].children[2]);  // Исправление порядка
ul[0].children[8].before(ul[0].children[6]); // глав 
ul[0].children[2].after(ul[0].children[5]);  // во второй книге
ul[0].children[3].after(ul[0].children[6]);  //

ul[5].children[0].before(ul[5].children[1]); //
ul[5].children[1].after(ul[5].children[9]);  // Исправление
ul[5].children[2].after(ul[5].children[4]);  // порядка
ul[5].children[3].after(ul[5].children[5]);  // глав
ul[5].children[5].after(ul[5].children[7]);  // в пятой книге
ul[5].children[6].after(ul[5].children[8]);  //

paragraph.textContent = 'Глава 8: За пределами ES6'; // Добавление новой главы
ul[2].children[8].after(paragraph);                  // в шестую книгу