document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const addResponse = () => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    console.log("hello");
                    resolve(request);
                    //const data = JSON.parse(request.responseText);
                    //data.cars.forEach(item => {
                    //    if (item.brand === select.value) {
                    //        const {brand, model, price} = item;
                    //        output.innerHTML = `Тачка ${brand} ${model} <br>
                    //        Цена: ${price}$`;
                    //    }
                    //});
                } else {
                    reject();
                }
            }); 
        });
    };

    select.addEventListener('change', () => {
        addResponse()
            .then((request) => {
                console.log(request);
            })
            .catch(() => {
            output.innerHTML = 'Произошла ошибка';
            });
    });

});