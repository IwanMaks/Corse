const body = document.body;
const colorName = document.querySelector('.color-name');
const newColor = document.querySelector('.new-color');

colorName.style.color = 'white';
body.style.backgroundColor = colorName.textContent;
const newColorBtn = () => { 
    let newRandomColor = Math.floor(Math.random() * (16777215 - 0)) + 0;
    let ost;
    let normColor = '';
    let ch;

    while(newRandomColor > 0) {
        ost = newRandomColor % 16;
        if ( ost === 15) {
            ch = 'f';
        } else if (ost === 14) {
            ch = 'e';
        } else if (ost === 13) {
            ch = 'd';
        } else if (ost === 12) {
            ch = 'c';
        } else if (ost === 11) {
            ch = 'b';
        } else if ( ost === 10) { 
            ch = 'a';
        } else {
            ch = '' + ost;
        }
        normColor = ch + normColor;
        newRandomColor = Math.floor(newRandomColor / 16);
    }

    while (normColor.length < 6) {
        normColor = '0' + normColor;
    }

    body.style.backgroundColor = '#' + normColor;
    colorName.textContent = '';
    colorName.textContent = '#' + normColor;
};


newColor.addEventListener('click', newColorBtn);