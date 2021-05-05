// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// object literal = locations


const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.']

const seattle = {
    name: 'seattle',
    minSalesPerHour: 23,
    maxSalesPerHour: 64,
    cookiesPerSale: 6.3,
    cookiesPerHr: [], //value in array
    customersPerHr: [], //value in array
    calcCustomersPerHr: function() {
        for(let i = 0; i < hours.length; i++) 
            this.customersPerHr.push(Math.floor(Math.random() * Math.floor(this.maxSalesPerHour)));
    },
    calcCookiesPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.customersPerHr[i] * this.cookiesPerSale));
        }
    },
    calcTotalDailyCookies: function() {
        let cookiesTotal = 0;
        for(let i = 0; i < this.cookiesPerHr.length; i++) {
            cookiesTotal = this.cookiesPerHr[i];
        }
        return cookiesTotal;
        }
    };
    seattle.calcCookiesPerHr();
    seattle.calcCustomersPerHr();

    let ulEl = document.getElementById('seattle');
    for (let i = 0; i < hours.length; i++){
        let liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + seattle.cookiesPerHr[i] + ' cookies';
        ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + seattle.calcTotalDailyCookies() + ' cookies';
    ulEl.appendChild(liEl);

const tokyo = {
    name: 'tokyo',
    minSalesPerHour: 3,
    maxSalesPerHour: 24,
    cookiesPerSale: 1.2,
    cookiesPerHr = [], //value in array
    customersPerHr = [], //value in array
    totalDailyCookies: 0,//number

    calcCustomersPerHr: function() {
        for(let i = 0; i < hours.length; i++) 
            this.customersPerHr.push(Math.floor(Math.random() * Math.floor(this.maxSalesPerHour)));
    },
    calcCookiesPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.customersPerHr[i] * this.cookiesPerSale));
        }
    },
    calcTotalDailyCookies: function() {
        let cookiesTotal = 0;
        for(let i = 0; i < this.cookiesPerHr.length; i++) {
            cookiesTotal = this.cookiesPerHr[i];
        }
        return cookiesTotal;
        }
    };
    tokyo.calcCookiesPerHr();
    tokyo.calcCustomersPerHr();

    let ulEl = document.getElementById('tokyo');
    for (let i = 0; i < hours.length; i++){
        let liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + tokyo.cookiesPerHr[i] + ' cookies';
        ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li')
    liEl.textContent = 'Total: ' + tokyo.calcTotalDailyCookies() + ' cookies';
    ulEl.appendChild(liEl);

const dubai = {
    name: 'dubai',
    minSalesPerHour: 11,
    maxSalesPerHour: 65,
    cookiesPerSale: 3.7,
    cookiesPerHr = [], //value in array
    customersPerHr = [], //value in array
    totalDailyCookies: 0,//number

    calcCustomersPerHr: function() {
        for(let i = 0; i < hours.length; i++) 
            this.customersPerHr.push(Math.floor(Math.random() * Math.floor(this.maxSalesPerHour)));
    },
    calcCookiesPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.customersPerHr[i] * this.cookiesPerSale));
        }
    },
    calcTotalDailyCookies: function() {
        let cookiesTotal = 0;
        for(let i = 0; i < this.cookiesPerHr.length; i++) {
            cookiesTotal = this.cookiesPerHr[i];
        }
        return cookiesTotal;
        }
    };
    dubai.calcCookiesPerHr();
    dubai.calcCustomersPerHr();

    let ulEl = document.getElementById('dubai');
    for (let i = 0; i < hours.length; i++){
        let liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + dubai.cookiesPerHr[i] + ' cookies';
        ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + dubai.calcTotalDailyCookies() + ' cookies';
    ulEl.appendChild(liEl);

const paris = {
    name: 'paris',
    minSalesPerHour: 20,
    maxSalesPerHour: 38,
    cookiesPerSale: 2.3,
    cookiesPerHr = [], //value in array
    customersPerHr = [], //value in array
    totalDailyCookies: 0, //number

    calcCustomersPerHr: function() {
        for(let i = 0; i < hours.length; i++)
            this.customersPerHr.push(Math.floor(Math.random() * Math.floor(this.maxSalesPerHour)));
    },
    calcCookiesPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.customersPerHr[i] * this.cookiesPerSale));
        }
    },
    calcTotalDailyCookies: function() {
        let cookiesTotal = 0;
        for(let i = 0; i < this.cookiesPerHr.length; i++) {
            cookiesTotal = this.cookiesPerHr[i];
        }
        return cookiesTotal;
        }
    };
    paris.calcCookiesPerHr();
    paris.calcCustomersPerHr();


    let ulEl = document.getElementById('paris');
    for (let i = 0; i < hours.length; i++){
        liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + paris.cookiesPerHr[i] + ' cookies';
        ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + paris.calcTotalDailyCookies() + ' cookies';
    ulEl.appendChild(liEl);

const lima = {
    name: 'lima',
    minSalesPerHour: 2,
    maxSalesPerHour: 16,
    cookiesPerSale: 4.6,
    cookiesPerHr = [], //value in array
    customersPerHr = [], //value in array
    totalDailyCookies: 0, //number

    calcCustomersPerHr: function() {
        for(let i = 0; i < hours.length; i++)
            this.customersPerHr.push(Math.floor(Math.random() * Math.floor(this.maxSalesPerHour)));
    },
    calcCookiesPerHr: function() {
        for(let i = 0; i < hours.length; i++) {
            this.cookiesPerHr.push(Math.floor(this.customersPerHr[i] * this.cookiesPerSale));
        }
    },
    calcTotalDailyCookies: function() {
        let cookiesTotal = 0;
        for(let i = 0; i < this.cookiesPerHr.length; i++) {
            cookiesTotal = this.cookiesPerHr[i];
        }
        return cookiesTotal;
        }
    };
    lima.calcCookiesPerHr();
    lima.calcCustomersPerHr();

    let ulEl = document.getElementById('lima');
    for (let i = 0; i < hours.length; i++){
        let liEl = document.createElement('li');
        liEl.textContent = hours[i] + ': ' + lima.cookiesPerHr[i] + ' cookies';
        ulEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + lima.calcTotalDailyCookies() + ' cookies';
    ulEl.appendChild(liEl);

