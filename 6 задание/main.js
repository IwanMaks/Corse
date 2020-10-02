'use strict'

const main = () => {
    let number = Math.round(Math.random() * 100);
    let inputNumber;
    let start;


    const isStart = () => {
        start = confirm('Начать игру? ');
        return start;
    };

    const isNum = number => {
        return !isNaN( number );
    };

    const inputUserNum = () => {
        inputNumber = prompt( 'Угадайте число от 1 до 100' );
        if ( inputNumber === null ) {
            start = false;
            return;

        } else if ( !isNum( inputNumber ) ) {
            alert( 'Введите число!' );
            inputUserNum();
        };

        return;
    };

    const checkUserNum = () => {
        inputUserNum();
        if ( start === false ) {
            return;
        } else if ( +inputNumber === number ) {
            start = false;
            return alert( 'Вы угадали!' );
        } else if ( inputNumber > number ) {
            alert( 'Загаданное число меньше' );
            checkUserNum();
        } else {
            alert( 'Загаданное число больше' );
            checkUserNum();
        };
    };

    if ( !isStart() ) {
        alert( 'Игра окончена' );
    } else {
        const startGame = () => {
            checkUserNum();
            if ( start === false ) {
                return;
            }
        }

        startGame();
        if ( start === false ) {
            alert( 'Игра окончена' );
        }
    };
};
main();