const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
};

const country = document.querySelector('#country');
const city = document.querySelector('#city');
const result = document.querySelector('.result');

country.addEventListener('change', (event) => {
    let val = '' + country.value;
    //console.log(city.children);
    if (city.children.length !== 0) { 
        for (let key in city.children) {
            if (city.firstChild !== undefined && city.firstChild !== null) {
                //console.dir(city.firstChild);
                city.removeChild(city.firstChild);
            }
        }
    }
    cityArr[val].forEach((item, key) => {
        let newElem = document.createElement('option');
        newElem.textContent = item;
        newElem.value = key;
        //console.dir(city);
        city.append(newElem);
        //console.log(city);
        city.style.display = 'block';
    });
    //console.log(city);
});

city.addEventListener('change', () => {
    let countryName, cityName;
    let val = country.value;
    switch(val) {
        case 'rus':
            console.log('rus');
            countryName = 'Россия';
            break;
        case 'uk':
            console.log('uk');
            countryName = 'Украина';
            break;
        case 'bel':
            console.log('bel');
            countryName = 'Беларусь';
            break;
        case 'jap':
            console.log('jap');
            countryName = 'Япония';
            break;
    }
    cityName = cityArr[val][city.value];
    result.textContent = countryName + ', ' + cityName;
});