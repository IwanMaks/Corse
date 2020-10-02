'use scrict';

document.addEventListener('DOMContentLoaded', () => { 

    function DomElement(selector, height, width, bg, position) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.position = position;
    };

    DomElement.prototype.createNewElement = function() {
        let newElem
        if (this.selector[0] === '.') {
            newElem =  document.createElement('div');
            newElem.classList.add(this.selector.substr(1));
        } else if (this.selector[0] === '#') {
            newElem = document.createElement('p');
            newElem.id = this.selector.substr(1);
        }
        newElem.style.height = this.height + 'px';
        newElem.style.width = this.width + 'px';
        newElem.style.background = this.bg + '';
        newElem.style.position = this.position + '';
        document.body.append(newElem);
        return newElem;
    };

    const newDiv = new DomElement('.block', 359, 479, '#FFFCCC url(men.jpg)', 'absolute');
    let divBlock = newDiv.createNewElement();
    document.body.style.overflow = 'hidden';


    let l = 0;
    let u = 0;

    document.addEventListener('keydown', event => {
        if (event.keyCode === 39) {
            l = l + 10;
            divBlock.style.left = l + 'px';
        } else if (event.keyCode === 37) {
            l = l - 10;
            divBlock.style.left = l + 'px';
        } else if (event.keyCode === 38) {
            u = u - 10;
            divBlock.style.top = u + 'px';
        } else if (event.keyCode === 40) {
            u = u + 10;
            divBlock.style.top = u + 'px';
        }
    });

});
alert( 20e-1['toString'](2) );