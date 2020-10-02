'use strict'

const main = function () {
    let number = Math.round(Math.random() * 100);
    let inputNum;
    let start;
    let trying;
    let tryingEnd;
    let win;

    const nextTry = () => {
        let isContinue = confirm( 'Хотите попробовать ещё раз?' );

        if ( isContinue ) {
            main();
        } else {
            alert( 'Игра окончена' );
        };
    };

    const isStart = () => {
        start = confirm( 'Начать игру? ' );
        return start;
    };

    const isNum = number => {
        return !isNaN( number );
    };

    const inputUserNum = () => {
        inputNum = prompt( 'Угадайте число от 1 до 100' );

        if ( inputNum === null ) {
            start = false;
            return;

        } else if ( !isNum( inputNum ) ) {
            alert( 'Введите число!' );
            inputUserNum();
        };

        return;
    };

    const checkUserNum = () => {
        if ( trying > 0 ) {
            inputUserNum();
            if ( start === false ) {
                return;
            } else if ( +inputNum === number ) {
                start = false;
                win = true;
                return alert( 'Вы угадали!' );

            } else if ( inputNum > number ) {
                trying -= 1;
                alert( 'Загаданное число меньше. \nКоличество ваших попыток: ' + trying );
                checkUserNum();
            } else {
                trying -= 1;
                alert( 'Загаданное число больше. \nКоличество ваших попыток: ' + trying );
                checkUserNum();
            }
        } else {
            tryingEnd = true;
            return alert( 'У вас закончились попытки!' );
        }
    };

    if ( !isStart() ) {
        alert( 'Игра окончена' );

    } else {
        const startGame = function () {
            trying = 10;

            checkUserNum();
            if ( start === false ) {
                return;
            }
        };

        startGame();
        
        if ( tryingEnd ) {
            nextTry();

        } else if ( start === false && !win === true ) {
            alert( 'Игра окончена' );

        } else if ( win === true ) {
            nextTry();
        };
    };
};

main();