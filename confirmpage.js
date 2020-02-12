// Appenda till confirmpage.html
let confirmContent = document.querySelector('.confirmContent');

confirmContent.innerHTML += `<h1>Order confirmation</h1><div class="productsCollector"></div>`

// Hämta data från localStorage
for (let productsArr = 1; productsArr < 13; productsArr++) {
  // Get picture 
  if (localStorage.getItem('a' + productsArr)) {
    let productsCollector = document.querySelector('.productsCollector')
    let productsObject = JSON.parse(localStorage.getItem('a' + productsArr));
    let productID = 'a' + productsArr;
    productsCollector.innerHTML += `<section class="productSectionStyle"><img class="imgWrapper" src="${productsObject.image}" alt="Bild på ${productsObject.title}"><p class="posterTitle">${productsObject.title} (${productsObject.value})</p></section>`
  }
}

let productsInfoCollector = document.createElement('div');
productsInfoCollector.className = 'productsInfoCollector';
let tableProductInfo = document.createElement('table');
tableProductInfo.className = 'tableProductInfo';
tableProductInfo.innerHTML += `<tr><th>Title</th><th>Amount</th><th>Price</th><th>Total price</th></tr>`;
confirmContent.appendChild(productsInfoCollector);

for (let productsArr = 1; productsArr < 13; productsArr++) {
  // Get Text Info
  if (localStorage.getItem('a' + productsArr)) {
    let productsObject = JSON.parse(localStorage.getItem('a' + productsArr));
    let productID = 'a' + productsArr;
    let totalPrice = productsObject.value * productsObject.price;
    tableProductInfo.innerHTML += `<tr><td>${productsObject.title}</td><td>${productsObject.value}</td><td>${productsObject.price}:-</td><td>${totalPrice}:-</td></tr>
    `;
    productsInfoCollector.appendChild(tableProductInfo)
  }
}

// Get Total Cost
let totalCost = document.createElement('h2');
totalCost.className = 'totalCost'
let totalPrice = 0;
for (let productsArr = 1; productsArr < 13; productsArr++) {

  if (localStorage.getItem('a' + productsArr)) {
    let productsObject = JSON.parse(localStorage.getItem('a' + productsArr));
    let productID = 'a' + productsArr;
    totalPrice += productsObject.value * productsObject.price;
    totalCost.innerHTML = `<h2>Total cost: ${totalPrice}:-</h2>`;
    tableProductInfo.appendChild(totalCost)
  }
}

window.localStorage.clear();