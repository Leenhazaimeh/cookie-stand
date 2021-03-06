'use strict';
console.log("hello");



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let parent = document.getElementById('container');
let table = document.createElement('table');
let rowCount = table.rows.length;

parent.appendChild(table);

let Salmon = [];
function Store(name, min, max, avgCookie) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.coustomerNum = [];
  this.cookiesNum = [];
  this.totalCookies = 0;
  this.theHours = [];
  Salmon.push(this);
}

Store.prototype.theMainHours = function (start, hours) {
  while (this.theHours.length < hours) {
    this.theHours.push(start++);
    if (start > 12) {
      start = 1;
    }
  }
};





Store.prototype.getRandCust = function () {
  for (let i = 0; i < this.theHours.length; i++) {
    this.coustomerNum.push(getRandomIntInclusive(this.min, this.max));
  }
};


Store.prototype.simulatedAmounts = function () {

  for (let i = 0; i < this.coustomerNum.length; i++) {
    let s = Math.floor(this.coustomerNum[i] * this.avgCookie);
    this.cookiesNum.push(s);
  }
};


Store.prototype.cookiesSum = function () {
  for (let j = 0; j < this.cookiesNum.length; j++) {
    this.totCookies = this.totCookies + this.cookiesNum[j]
  };

};

Store.prototype.render = function () {
  let tr2 = document.createElement('tr');
  table.appendChild(tr2);
  let td1 = document.createElement('td');
  td1.textContent = this.name;
  tr2.appendChild(td1);

  let td2 = 0;
  let subTotal = 0;
  for (let i = 0; i < this.theHours.length; i++) {
    td2 = document.createElement('td');
    td2.textContent = this.cookiesNum[i];
    tr2.appendChild(td2);
    subTotal = subTotal + this.cookiesNum[i];
  }

  let td6 = document.createElement('td');
  td6.textContent = subTotal;
  tr2.appendChild(td6);

};



let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);



for (let i = 0; i < Salmon.length; i++) {
  Salmon[i].theMainHours(6, 14);
  Salmon[i].getRandCust();
  Salmon[i].simulatedAmounts();
  Salmon[i].cookiesSum();
};




function addHeder() {
  let tr1 = document.createElement('tr');
  table.appendChild(tr1);
  let th = document.createElement('th');
  tr1.appendChild(th);

  let text = 'am';
  for (let i = 0; i < Salmon[0].theHours.length; i++) {
    if (Salmon[0].theHours[i] === 12) {
      text = 'pm';
    };
    th = document.createElement('th');
    th.textContent = Salmon[0].theHours[i] + text;
    tr1.appendChild(th);
  }
  let th2 = document.createElement('th');
  th2.textContent = 'Daily Location Total';
  tr1.appendChild(th2)
};
addHeder();



for (let i = 0; i < Salmon.length; i++) {
  Salmon[i].render();
}

function addFooter() {
  let tr3 = document.createElement('tr');
  table.appendChild(tr3);
  let td3 = document.createElement('td');
  td3.textContent = 'Totals';
  tr3.appendChild(td3);

  let td4 = 0;
  let sum = 0;
  let total = 0;
  for (let i = 0; i < Salmon[0].theHours.length; i++) {
    sum = 0;
    td4 = document.createElement('td');
    for (let j = 0; j < Salmon.length; j++) {
      sum += Salmon[j].cookiesNum[i];
      td4.textContent = sum;
      tr3.appendChild(td4);
    }
    total += sum;
  }

  let td5 = document.createElement('td');
  td5.textContent = total;
  tr3.appendChild(td5);
}
addFooter();


const form = document.getElementById('former');

form.addEventListener('submit', storCreator)


function storCreator(event) {
  event.preventDefault();
  console.log(event.target);
  let storName = event.target.Sname.value;
  let Min = parseInt(event.target.m.value);
  let Max = parseInt(event.target.mx.value);
  let Avg = parseFloat(event.target.Savg.value);
  let newStore = new Store(storName, Min, Max, Avg);
  table.deleteRow(rowCount - 1);
  newStore.theMainHours(6, 14);
  newStore.getRandCust();
  newStore.simulatedAmounts();
  newStore.cookiesSum();
  newStore.render();

  console.log(Salmon);
  addFooter();

};



