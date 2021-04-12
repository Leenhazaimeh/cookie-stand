'use strict';
//helper funcion

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let hours= ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] ;

function store (name,min,max,avg){

    this.name = name ;
    this.min = min ;
    this.max  = max ;
    this.avg = 
}


const Seattle = {
   
location : 'seatele',
    cookiesNum: [],
    min: 23,
    max: 65,
    avgCookie: 6.3,
    coustomerNum: [],
    totCookis: 0,



    getRandCust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totCookis = this.totCookis + this.cookiesNum[j]
            console.log(this.totCookis);
        }
        console.log(this.totCookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = `${this.location}`
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totCookis} cookies`


    }


}
Seattle.getRandCust();

Seattle.simulatedamounts();
Seattle.cookissum();

console.log(Seattle.cookiesNum);
Seattle.creatsalmoncookies();



/*const Tokyo = {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   location :'tokyo',
    cookiesNum: [],
    min: 3,
   max: 24,
   avgCookie: 6.3,
    coustomerNum: [],
    totCookis: 0,



    getRandCust: function () {
        for (let i = 0; i < this.hours.length; i++) {
           this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
      }



    //},


    //simulatedamounts: function () {

        //for (let n = 0; n < this.hours.length; n++) {
           // let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
            //console.log(s);
           // this.cookiesNum.push(s);
        //}
       // console.log(this.cookiesNum);
    //},

    //cookissum: function () {
        //for (let j = 0; j < this.cookiesNum.length; j++) {

            //this.totCookis = this.totCookis + this.cookiesNum[j]
            //console.log(this.totCookis);
        //}
        //console.log(this.totCookis);

    //},
   // creatsalmoncookies: function () {
       // let body = document.getElementById('container');
       // let h2storeone = document.createElement('h2');
        //body.appendChild(h2storeone);
       // h2storeone.textContent = `${this.location}`
        //let ulStoreOne = document.createElement('ul');
       // body.appendChild(ulStoreOne);
        //for (let i = 0; i < this.hours.length; i++) {
          //  let liStoreOne = document.createElement('li');
          //  ulStoreOne.appendChild(liStoreOne);
           // liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

       // }
       // let totalele = document.createElement('li')
       // ulStoreOne.appendChild(totalele)
       // totalele.textContent = `Total: ${this.totCookis} cookies`


    //}


//}
//Tokyo.getRandCust();

//Tokyo.simulatedamounts();
//Tokyo.cookissum();

//console.log(Tokyo.cookiesNum);
//Tokyo.creatsalmoncookies();





//const Dubai= {
   // hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
   // location :'dubai',
    //cookiesNum: [],
    //min:11,
    //max: 38,
    //avgCookie:3.7,
    //coustomerNum: [],
    //totCookis: 0,



    //getRandCust: function () {
       // for (let i = 0; i < this.hours.length; i++) {
          //  this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
      //  }



    //},


    //simulatedamounts: function () {

       // for (let n = 0; n < this.hours.length; n++) {
           // let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
            //console.log(s);
           // this.cookiesNum.push(s);
       // }
       // console.log(this.cookiesNum);
    //},

    //cookissum: function () {
      //  for (let j = 0; j < this.cookiesNum.length; j++) {

           // this.totCookis = this.totcookis + this.cookiesNum[j]
           // console.log(this.totCookis);
       // }
        //console.log(this.totCookis);

   // },
    //creatsalmoncookies: function () {
        //let body = document.getElementById('container');
       // let h2storeone = document.createElement('h2');
       // body.appendChild(h2storeone);
       // h2storeone.textContent = `${this.location}`
       // let ulStoreOne = document.createElement('ul');
       // body.appendChild(ulStoreOne);
        //for (let i = 0; i < this.hours.length; i++) {
          //  let liStoreOne = document.createElement('li');
           // ulStoreOne.appendChild(liStoreOne);
           // liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        //}
       // let totalele = document.createElement('li')
       // ulStoreOne.appendChild(totalele)
       // totalele.textContent = `Total: ${this.totCookis} cookies`


    //}


//}
//Dubai.getRandCust();

//Dubai.simulatedamounts();
//Dubai.cookissum();

//console.log(Dubai.cookiesNum);
//Dubai.creatsalmoncookies();




//const Paris= {
   // hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    //location :'paris',
    //cookiesNum: [],
    //min:20,
    //max: 38,
//vgCookie:2.3,
    //coustomerNum: [],
    //totCookis: 0,



   // getRandCust: function () {
        //for (let i = 0; i < this.hours.length; i++) {
           // this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        //}



    //},


    //simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totCookis = this.totCookis + this.cookiesNum[j]
            console.log(this.totCookis);
        }
        console.log(this.totCookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = `${this.location}`
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totCookis} cookies`


    }


}
Paris.getRandCust();

Paris.simulatedamounts();
Paris.cookissum();

console.log(Paris.cookiesNum);
Paris.creatsalmoncookies();




const Lima= {
    hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    location :'lima',
    cookiesNum: [],
    min:2,
    max: 16,
    avgCookie:4.6,
    coustomerNum: [],
    totCookis: 0,



    getRandCust: function () {
        for (let i = 0; i < this.hours.length; i++) {
            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
        }



    },


    simulatedamounts: function () {

        for (let n = 0; n < this.hours.length; n++) {
            let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
            //console.log(s);
            this.cookiesNum.push(s);
        }
        console.log(this.cookiesNum);
    },

    cookissum: function () {
        for (let j = 0; j < this.cookiesNum.length; j++) {

            this.totCookis = this.totCookis + this.cookiesNum[j]
            console.log(this.totCookis);
        }
        console.log(this.totCookis);

    },
    creatsalmoncookies: function () {
        let body = document.getElementById('container');
        let h2storeone = document.createElement('h2');
        body.appendChild(h2storeone);
        h2storeone.textContent = `${this.location}`
        let ulStoreOne = document.createElement('ul');
        body.appendChild(ulStoreOne);
        for (let i = 0; i < this.hours.length; i++) {
            let liStoreOne = document.createElement('li');
            ulStoreOne.appendChild(liStoreOne);
            liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

        }
        let totalele = document.createElement('li')
        ulStoreOne.appendChild(totalele)
        totalele.textContent = `Total: ${this.totCookis} cookies`


    }


}
Lima.getRandCust();

Lima.simulatedamounts();
Lima.cookissum();

console.log(Lima.cookiesNum);
Lima.creatsalmoncookies();