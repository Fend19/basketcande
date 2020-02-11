// Total price in cart
let totalSum = 0;

window.addEventListener('click', function () {
  if (event.target == document.querySelector('.popUpBasket')) {
    let removePopUpBasket = document.querySelector('.popUpBasket');
    document.querySelector('.popUpBasket').parentNode.removeChild(removePopUpBasket);
    totalSum = 0;
  }
});

let basketBtn = document.getElementById('basket');
// Add eventlistener to basket to open popUp
basketBtn.addEventListener('click', getLocalStorage);


function getLocalStorage() {
  if (document.querySelector('.popUpBasket')) {
    console.log('popUpBasket hittas och tas bort');
    let removePopUpBasket = document.querySelector('.popUpBasket');
    removePopUpBasket.parentNode.removeChild(removePopUpBasket);
    totalSum = 0;
  } else {
    createBasket();
  }
}

function createBasket() {
  createPopUpBasket();
  createPopUpContent();
}

function createPopUpBasket() {
  // Create a section for basket that gives a shoddow on everything behind it
  let popUpBasket = document.createElement('div');
  popUpBasket.className = "popUpBasket"
  popUpBasket.style.display = 'block';
  popUpBasket.style.position = 'absolute';
  popUpBasket.style.zIndex = '10';
  popUpBasket.style.top = '80px';
  popUpBasket.style.width = '100%';
  popUpBasket.style.height = '100%';
  popUpBasket.style.overflow = 'auto';
  popUpBasket.style.backgroundColor = '#000';
  popUpBasket.style.backgroundColor = 'rgb(0,0,0,0.3)';

  // Append popUp to site
  document.querySelector('.homePage').appendChild(popUpBasket);
}


function createPopUpContent() {
  // Create section for basket products
  let popUpContent = document.createElement('div');
  popUpContent.className = "popUpContent";
  popUpContent.innerHTML = `<h1>Varukorg</h1>`;
  document.querySelector('.popUpBasket').appendChild(popUpContent);
  createProductInBasket();

  popUpContent.innerHTML += `<br><h3>Totalkostnad: ${totalSum} :-</h3><br><button class="buyBtn">Gå till kassa</button>`;

}

function createProductInBasket() {
  // Creation of products in the basket
  for (let i = 1; i < 13; i++) {
    if (window.localStorage.getItem('a' + i)) {
      let itemInLocalStorage = JSON.parse(window.localStorage.getItem('a' + i));
      let classNameForBasketProduct = 'a' + i;


      let itemInBasket = document.createElement('section');
      itemInBasket.className = 'productInBasket productInBasket-' + classNameForBasketProduct;
      itemInBasket.innerHTML = `<div class="basketImg"><img class='imgWrapper' src='${itemInLocalStorage.image}'></div><br>
      <div><h2>${itemInLocalStorage.title}</h2><br>
      <input class='${classNameForBasketProduct}' type="number" min='0' value="${itemInLocalStorage.value}"><br>
      <h2 class='h2-${classNameForBasketProduct}'>${itemInLocalStorage.price * itemInLocalStorage.value}:-</h2>
      </div>`;
      document.querySelector('.popUpContent').appendChild(itemInBasket);
      console.log(totalSum);
      totalSum += (itemInLocalStorage.price * itemInLocalStorage.value);
      console.log(itemInLocalStorage.price);
      console.log(itemInLocalStorage.value);
      console.log(`.${classNameForBasketProduct}`);

      // Creating eventListner to amountInput next to each item in cart.
      // let inputValue = document.querySelector(`.${classNameForBasketProduct}`);
      // inputValue.addEventListener('change', function(event){
      //   console.log(event);


      //   console.log(document.querySelector(`.${classNameForBasketProduct}`).value);
      //   itemInLocalStorage.value = this.value;
      //   document.querySelector('.h2-'+this.className).innerHTML = (itemInLocalStorage.price * this.value);
      //   console.log('nu ändras nått??');

      // });

    } else {
      console.log('hittar inte någon me de namnet');
    };
  };
};

// // ******* Show PopUp *******
// function popUp(thisLocalStorageParsed) {



// }
// function showPopUp(thisLocalStorageParsed) {

//   productStorage(popUpContent, thisLocalStorageParsed, popUpBasket)
// }
// popUpContent.appendChild(basketSection)
// // Function below appends products to popUp (basket)
// function productStorage(thisLocalStorageParsed) {
//   // Empty basket for every click


//   // Loops over localStorage to see what's in it and creates sections for each product
//   // ***** WHY DOES IT CREATES 2 BASKETS(?((?(?)?)?)?) SO FCKING ANGRY ******

//       // console.log(localStorage.getItem(localStorage.key(i).title))
//     }
//   }





//   let buyBtn = document.querySelector('.buyBtn');
//   console.log('clicked buy button')

//   buyBtn.addEventListener('click', function () {
//     popUpBasket.style.display = 'none';
//     form(site, buyBtn)
//   })
// }