const calculator = {
    a: document.querySelectorAll('input')[0],
    b: document.querySelectorAll('input')[1],
    res: document.querySelectorAll('input')[2],
    sumBtn: document.querySelector('#sum'),
    multBtn: document.querySelector('#mult'),
    sum: function(){
        console.log(this);
        this.res.value = +this.a.value + +this.b.value;
        
    },
    mult: function(){
        this.res.value = +this.a.value * +this.b.value;
    },
    show: function(){
        this.sumBtn.addEventListener('click', () => {
           this.sum();
        });
        this.multBtn.addEventListener('click', () => {
            this.mult();
        });
    },
};

calculator.show();

