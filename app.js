'use strict';

const Seattle = {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    cookiesNum: [],
    min: 23,
    max: 65,
    avgcookie: 6.3,
    coustomerNum: [],
    totcookis: 0,



    getrandcust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgcookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totcookis = this.totcookis + this.cookiesNum[j]
            console.log(this.totcookis);
        }
        console.log(this.totcookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = "Seattle"
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totcookis} cookies`


    }


}
Seattle.getrandcust();

Seattle.simulatedamounts();
Seattle.cookissum();

console.log(Seattle.cookiesNum);
Seattle.creatsalmoncookies();



const Tokyo = {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    cookiesNum: [],
    min: 3,
    max: 24,
    avgcookie: 6.3,
    coustomerNum: [],
    totcookis: 0,



    getrandcust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgcookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totcookis = this.totcookis + this.cookiesNum[j]
            console.log(this.totcookis);
        }
        console.log(this.totcookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = "Tokyo"
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totcookis} cookies`


    }


}
Tokyo.getrandcust();

Tokyo.simulatedamounts();
Tokyo.cookissum();

console.log(Tokyo.cookiesNum);
Tokyo.creatsalmoncookies();





const Dubai= {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    cookiesNum: [],
    min:11,
    max: 38,
    avgcookie:3.7,
    coustomerNum: [],
    totcookis: 0,



    getrandcust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgcookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totcookis = this.totcookis + this.cookiesNum[j]
            console.log(this.totcookis);
        }
        console.log(this.totcookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = "Dubai"
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totcookis} cookies`


    }


}
Dubai.getrandcust();

Dubai.simulatedamounts();
Dubai.cookissum();

console.log(Dubai.cookiesNum);
Dubai.creatsalmoncookies();




const Paris= {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    cookiesNum: [],
    min:20,
    max: 38,
    avgcookie:2.3,
    coustomerNum: [],
    totcookis: 0,



    getrandcust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgcookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totcookis = this.totcookis + this.cookiesNum[j]
            console.log(this.totcookis);
        }
        console.log(this.totcookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = "Paris"
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totcookis} cookies`


    }


}
Paris.getrandcust();

Paris.simulatedamounts();
Paris.cookissum();

console.log(Paris.cookiesNum);
Paris.creatsalmoncookies();




const Lima= {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

    cookiesNum: [],
    min:2,
    max: 16,
    avgcookie:4.6,
    coustomerNum: [],
    totcookis: 0,



    getrandcust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgcookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totcookis = this.totcookis + this.cookiesNum[j]
            console.log(this.totcookis);
        }
        console.log(this.totcookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = "Lima"
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totcookis} cookies`


    }


}
Lima.getrandcust();

Lima.simulatedamounts();
Lima.cookissum();

console.log(Lima.cookiesNum);
Lima.creatsalmoncookies();






//helper funcion

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



