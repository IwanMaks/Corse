'use strict';

//Обязательное задание
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let toDoData = JSON.parse(localStorage.getItem('toDoData'));

if (toDoData === null) {
    toDoData = [];
}

const render = () => {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    for (let key in toDoData) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = `
            <span class="text-todo">${toDoData[key].value}</span>
            <div class="todo-buttons">
                <button class="todo-remove"></button>
                <button class="todo-complete"></button>
			</div>
        `;
        if (toDoData[key].complited) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');
        const todoRemove = li.querySelector('.todo-remove');

        todoRemove.addEventListener('click', () => {
            toDoData.splice(key, 1);
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
            render();
        });

        btnTodoComplete.addEventListener('click', () => {
            toDoData[key].complited = !toDoData[key].complited;
            localStorage.setItem('toDoData', JSON.stringify(toDoData));
            render();
        });
    };
};

todoControl.addEventListener('submit', event => {
    event.preventDefault();
    const newToDo = {
        value: headerInput.value,
        complited: false
    };

    if (newToDo.value.trim() !== ''){ 
        headerInput.value = '';
        toDoData.push(newToDo);
        localStorage.setItem('toDoData', JSON.stringify(toDoData));
        render();
    }

});

render();