'use strict';
//helper funcion



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let parent = document.getElementById('container');
let table = document.createElement('table');
parent.appendChild(table);

let salmon = [];
function store(name,min,max,avgCookie){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.coustomerNum = [];
  this.cookiesNum = [];
  this.TotalCookies = 0;
  this.thehours = [];
  salmon.push(this);
}

store.prototype.themainhours = function(start, hours){
  while(this.thehours.length < hours){
    this.thehours.push(start++);
    if(start > 12){
      start = 1;
    }
  } 
};


    
    

store.prototype.getRandCust = function(){
  for(let i=0; i<this.thehours.length; i++){
    this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
  }
};


store.prototype.simulatedamounts = function(){
  
  for(let i=0; i < this.coustomerNum.length; i++){
   let s= Math.floor( this.coustomerNum[i] * this.avgCookie);
    this.cookiesNum.push(s);
  }
};

    
store.prototype.CookiesSum = function(){
  for(let j=0; j < this.cookiesNum.length; j++){
    this.totCookies += this.cookiesNum[j]};
  
};

store.prototype.render = function(){
  let tr2 = document.createElement('tr');
  table.appendChild(tr2);
  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr2.appendChild(td1);

  let td2 = null;
  let subtotal = 0;
  for(let i=0; i < this.thehours.length; i++){
    td2= document.createElement('td');
    td2.textContent = this.cookiesNum[i];
    tr2.appendChild(td2);
    subtotal +=this.cookiesNum[i];
  }

  let td6= document.createElement('td');
  td6.textContent = subtotal;
  tr2.appendChild(td6);

};



let Seattle = new store('Seattle',23,65,6.3);
let Tokyo = new store('Tokyo',3,24,1.2);
let Dubai = new store('Dubai',11,38,3.7);
let Paris = new store('Paris',20,38,2.3);
let Lima = new store('Lima',2,16,4.6);



for(let i=0; i<  salmon.length; i++){
    salmon[i].themainhours(6,14);
    salmon[i].getRandCust();
    salmon[i].simulatedamounts();
    salmon[i].CookiesSum();
};




function addheder() {  
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  let th = document.createElement('th'); 
  tr1.appendChild(th);
  
  let text = 'am';
  for(let i=0; i<salmon[0].thehours.length; i++){
    if(salmon[0].thehours[i] === 12){
      text = 'pm';
    };
    th =document.createElement('th');
    th.textContent = salmon[0].thehours[i] + text;
    tr1.appendChild(th); 
  }
  let th2 = document.createElement('th');
  th2.textContent = 'Daily Location Total';
  tr1.appendChild(th2)
};
addheder();


for(let i=0; i< salmon.length; i++){
    salmon[i].render();
}

function addfooter(){
  let tr3 = document.createElement('tr');
  table.appendChild(tr3);
  let td3 = document.createElement('td');
  td3.textContent = 'Totals';
  tr3.appendChild(td3);

  let td4 = null;
  let sum = 0;
  let total = 0;
  for(let i=0; i<salmon[0].thehours.length; i++){
    sum = 0;
    td4 = document.createElement('td');
    for(let j=0; j<salmon.length; j++){
      sum += salmon[j].cookiesNum[i];
      td4.textContent = sum;
      tr3.appendChild(td4);
    }
    total += sum;
  }
  let td5 = document.createElement('td');
  td5.textContent = total;
  tr3.appendChild(td5);
}
addfooter();


//const Seattle = {

//ocation : 'seatele',
//cookiesNum: [],
// max: 65,
//avgCookie: 6.3,
//coustomerNum: [],
//totCookis: 0,

// /*Seattle.getRandCust();

// Seattle.simulatedamounts();
// //Seattle.cookissum();

// //console.log(Seattle.cookiesNum);
// //Seattle.creatsalmoncookies();



// /*const Tokyo = {
//     hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//    location :'tokyo',
//     cookiesNum: [],
//     min: 3,
//    max: 24,
//    avgCookie: 6.3,
//     coustomerNum: [],
//     totCookis: 0,



//     getRandCust: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//            this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
//       }



//     //},


//     //simulatedamounts: function () {

//         //for (let n = 0; n < this.hours.length; n++) {
//            // let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
//             //console.log(s);
//            // this.cookiesNum.push(s);
//         //}
//        // console.log(this.cookiesNum);
//     //},

//     //cookissum: function () {
//         //for (let j = 0; j < this.cookiesNum.length; j++) {

//             //this.totCookis = this.totCookis + this.cookiesNum[j]
//             //console.log(this.totCookis);
//         //}
//         //console.log(this.totCookis);

//     //},
//    // creatsalmoncookies: function () {
//        // let body = document.getElementById('container');
//        // let h2storeone = document.createElement('h2');
//         //body.appendChild(h2storeone);
//        // h2storeone.textContent = `${this.location}`
//         //let ulStoreOne = document.createElement('ul');
//        // body.appendChild(ulStoreOne);
//         //for (let i = 0; i < this.hours.length; i++) {
//           //  let liStoreOne = document.createElement('li');
//           //  ulStoreOne.appendChild(liStoreOne);
//            // liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

//        // }
//        // let totalele = document.createElement('li')
//        // ulStoreOne.appendChild(totalele)
//        // totalele.textContent = `Total: ${this.totCookis} cookies`


//     //}


// //}
// //Tokyo.getRandCust();

// //Tokyo.simulatedamounts();
// //Tokyo.cookissum();

// //console.log(Tokyo.cookiesNum);
// //Tokyo.creatsalmoncookies();





// //const Dubai= {
//    // hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//    // location :'dubai',
//     //cookiesNum: [],
//     //min:11,
//     //max: 38,
//     //avgCookie:3.7,
//     //coustomerNum: [],
//     //totCookis: 0,



//     //getRandCust: function () {
//        // for (let i = 0; i < this.hours.length; i++) {
//           //  this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
//       //  }



//     //},


//     //simulatedamounts: function () {

//        // for (let n = 0; n < this.hours.length; n++) {
//            // let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
//             //console.log(s);
//            // this.cookiesNum.push(s);
//        // }
//        // console.log(this.cookiesNum);
//     //},

//     //cookissum: function () {
//       //  for (let j = 0; j < this.cookiesNum.length; j++) {

//            // this.totCookis = this.totcookis + this.cookiesNum[j]
//            // console.log(this.totCookis);
//        // }
//         //console.log(this.totCookis);

//    // },
//     //creatsalmoncookies: function () {
//         //let body = document.getElementById('container');
//        // let h2storeone = document.createElement('h2');
//        // body.appendChild(h2storeone);
//        // h2storeone.textContent = `${this.location}`
//        // let ulStoreOne = document.createElement('ul');
//        // body.appendChild(ulStoreOne);
//         //for (let i = 0; i < this.hours.length; i++) {
//           //  let liStoreOne = document.createElement('li');
//            // ulStoreOne.appendChild(liStoreOne);
//            // liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

//         //}
//        // let totalele = document.createElement('li')
//        // ulStoreOne.appendChild(totalele)
//  totalele.textContent = `Total: ${this.totCookis} cookies`


//     //}


// //}
// //Dubai.getRandCust();

// //Dubai.simulatedamounts();
// //Dubai.cookissum();

// //console.log(Dubai.cookiesNum);
// //Dubai.creatsalmoncookies();




// //const Paris= {
//    // hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     //location :'paris',
//     //cookiesNum: [],
//     //min:20,
//     //max: 38,
// //vgCookie:2.3,
//     //coustomerNum: [],
//     //totCookis: 0,



//    // getRandCust: function () {
//         //for (let i = 0; i < this.hours.length; i++) {
//            // this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
//         //}



//     //},


//     //simulatedamounts: function () {

//         for (let n = 0; n < this.hours.length; n++) {
//             let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
//             //console.log(s);
//             this.cookiesNum.push(s);
//         }
//         console.log(this.cookiesNum);
//     },

//     cookissum: function () {
//         for (let j = 0; j < this.cookiesNum.length; j++) {

//             this.totCookis = this.totCookis + this.cookiesNum[j]
//             console.log(this.totCookis);
//         }
//         console.log(this.totCookis);

//     },
//     creatsalmoncookies: function () {
//         let body = document.getElementById('container');
//         let h2storeone = document.createElement('h2');
//         body.appendChild(h2storeone);
//         h2storeone.textContent = `${this.location}`
//         let ulStoreOne = document.createElement('ul');
//         body.appendChild(ulStoreOne);
//         for (let i = 0; i < this.hours.length; i++) {
//             let liStoreOne = document.createElement('li');
//             ulStoreOne.appendChild(liStoreOne);
//             liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

//         }
//         let totalele = document.createElement('li')
//         ulStoreOne.appendChild(totalele)
//         totalele.textContent = `Total: ${this.totCookis} cookies`


//     }


// }
// Paris.getRandCust();

// Paris.simulatedamounts();
// Paris.cookissum();

// console.log(Paris.cookiesNum);
// Paris.creatsalmoncookies();




// const Lima= {
//     hours: ['6am', '7pm', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     location :'lima',
//     cookiesNum: [],
//     min:2,
//     max: 16,
//     avgCookie:4.6,
//     coustomerNum: [],
//     totCookis: 0,



//     getRandCust: function () {
//         for (let i = 0; i < this.hours.length; i++) {
//             this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
//         }



//     },


//     simulatedamounts: function () {

//         for (let n = 0; n < this.hours.length; n++) {
//             let s = Math.floor(((this.coustomerNum[n]) * (this.avgCookie)));
//             //console.log(s);
//             this.cookiesNum.push(s);
//         }
//         console.log(this.cookiesNum);
//     },

//     cookissum: function () {
//         for (let j = 0; j < this.cookiesNum.length; j++) {

//             this.totCookis = this.totCookis + this.cookiesNum[j]
//             console.log(this.totCookis);
//         }
//         console.log(this.totCookis);

//     },
//     creatsalmoncookies: function () {
//         let body = document.getElementById('container');
//         let h2storeone = document.createElement('h2');
//         body.appendChild(h2storeone);
//         h2storeone.textContent = `${this.location}`
//         let ulStoreOne = document.createElement('ul');
//         body.appendChild(ulStoreOne);
//         for (let i = 0; i < this.hours.length; i++) {
//             let liStoreOne = document.createElement('li');
//             ulStoreOne.appendChild(liStoreOne);
//             liStoreOne.textContent = `${this.hours[i]} :${this.cookiesNum[i]} cookis`;

//         }
//         let totalele = document.createElement('li')
//         ulStoreOne.appendChild(totalele)
//         totalele.textContent = `Total: ${this.totCookis} cookies`


//     }


// }
// Lima.getRandCust();

// Lima.simulatedamounts();
// Lima.cookissum();

// console.log(Lima.cookiesNum);
// Lima.creatsalmoncookies();