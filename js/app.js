'use strict'
const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

let allCookieStands = [];
let newCookieStand = document.getElementById('newCookieStand');

function cookieStand (name, minSalesPerHour, maxSalesPerHour, cookiesPerSale) {
    this.name = name;
    this.minSalesPerHour = minSalesPerHour;
    this.maxSalesPerHour = maxSalesPerHour;
    this.cookiesPerSale = cookiesPerSale;
    this.cookiesPerHr = [];
    this.customersPerHr = [];
    allCookieStands.push(this);
}
new cookieStand('Seattle', '23', '65', '6.3');
new cookieStand('Tokyo', '3', '24', '1.2');
new cookieStand('Dubai', '11', '38', '3.7');
new cookieStand('Paris', '20', '38', '2.3');
new cookieStand('Lima', '2', '16', '4.6');

cookieStand.prototype.calcCustomersPerHr=function() {
    for(let i = 0; i < hours.length; i++) {
        this.customersPerHr.push(Math.floor(Math.random() * (this.maxSalesPerHour-this.minSalesPerHour+1)+this.minSalesPerHour));
    }
};
cookieStand.prototype.calcCookiesPerHr=function() {
    this.calcCustomersPerHr();
    for(let i = 0; i < hours.length; i++) {
this.cookiesPerHr.push(Math.ceil(this.customersPerHr[i] * this.cookiesPerSale))
    }
};
cookieStand.prototype.calcTotalDailyCookies=function() {
    let cookiesTotal = 0;
    for(let i = 0; i < hours.length; i++) {
cookiesTotal += this.cookiesPerHr[i];
    }
    return cookiesTotal;
};

cookieStand.prototype.render=function() {
    this.calcCookiesPerHr();
    let cookieStandTable = document.getElementById('t-body');
    let trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (let i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesPerHr[i];
        trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.calcTotalDailyCookies();
    trEl.appendChild(tdEl);
    cookieStandTable.appendChild(trEl);
}; 
function tableHead() {
    let cookieStandTable = document.getElementById('t-head');
    let trEl = document.createElement('tr');
    let thEl = document.createElement('th');
    thEl.textContent = ' ';
    trEl.appendChild(thEl);

    for (let i = 0; i < hours.length; i++) {
        thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    if (i === hours.length-1) {
        thEl = document.createElement('th');
        thEl.textContent = 'Daily Location Total';
        trEl.appendChild(thEl);
        cookieStandTable.appendChild(trEl);
        }
    }
}

function renderCookieStand() {
    for (let i = 0; i < allCookieStands.length; i++) {
        allCookieStands[i].render();
    }
}

function totalAtFooter() {
    let standCookiePerHr = [];
    for (let i = 0; i < hours.length; i++) {
        let totalCookiePerHour = 0;
        for (let j = 0; j < allCookieStands.length; j++) {
            totalCookiePerHour += allCookieStands[j].cookiesPerHr[i];
        }
        standCookiePerHr.push(totalCookiePerHour);
    }
let footData = document.getElementById('cookiestand');
let trEl = document.createElement('tr');
trEl.id = 'total-row';
let tdEl = document.createElement('td');
tdEl.textContent = 'Total';
trEl.appendChild(tdEl);
    for (i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = standCookiePerHr[i];
    trEl.appendChild(tdEl);
}
let totalAllStands = 0;
for (i = 0; i < hours.length; i++) {
    totalAllStands = standCookiePerHr[i];
}
tdEl = document.createElement('td');
tdEl.textContent = totalAllStands;
trEl.appendChild(tdEl);

footData.appendChild(trEl);
}

newCookieStand.addEventListener('submit', handleNewCookieStand);
function handleNewCookieStand(event) {
    event.preventDefault();

    let newStandName = event.target.name.value;
    let newMinSalesPerHour = event.target.minSalesPerHour.value;
    let newMaxSalesPerHour = event.target.maxSalesPerHour.value;
    let newCookiesPerSale = event.target.cookiesPerSale.value;
    let newInput = new cookieStand(newStandName, newMinSalesPerHour, newMaxSalesPerHour, newCookiesPerSale);

    event.target.name.value = null;
    event.target.minSalesPerHour.value = null;
    event.target.maxSalesPerHour.value = null;
    event.target.cookiesPerSale.value = null;

    newInput.render();
    totalAtFooter();
    dupRow();
    }
    
function dupRow() {
    let totalRow = document.getElementById('total-row');
    if (totalRow ) {
    totalRow.remove();
    }
}
tableHead();
renderCookieStand();
// totalAtFooter();