'use strict'


const headerInput = document.querySelector('.header-input');
const todoControl = document.querySelector('.todo-control');
const todoList = document.querySelector('.todo-list');
const todoComplited = document.querySelector('.todo-completed');

const todoData = [
    {
        value: 'Сварить кофе',
        complited: false
    },
    {
        value: 'Помыть посуду',
        complited: true
    }
];

const render = function () {
    console.log(todoList.textContent);
    todoList.textContent = '';
    todoComplited.textContent = '';

    todoData.forEach( function(item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value +'</span>' +
            '<div class="todo-buttons"></div>' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.complited) {
            todoComplited.append(li);
        } else {
            todoList.append(li);
        }
    });
};

todoControl.addEventListener( 'submit', function (event) {
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        complited: false
    }
    todoData.push(newTodo);

    render();
} );

render();