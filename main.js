// Total price in cart
let totalSum = 0;

window.addEventListener('click', function () {
  if (event.target == document.querySelector('.popUpBasket')) {
    document.getElementById('basket').src = "/images/shoppingcart.svg"
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
    document.getElementById('basket').src = "/images/shoppingcart.svg"
    let removePopUpBasket = document.querySelector('.popUpBasket');
    removePopUpBasket.style.display = 'none';
    removePopUpBasket.parentNode.removeChild(removePopUpBasket);
    totalSum = 0;

  } else {
    createBasket();
  }

  for (let i = 1; i < 13; i++) {
    if (document.querySelector(`#removeItem-a${i}`)) {

      let removeItem = document.getElementById(`removeItem-a${i}`);
      removeItem.addEventListener('click', function () {
        let removeThis = document.querySelector('.productInBasket-a' + i);
        removeThis.parentNode.removeChild(removeThis);
        localStorage.removeItem('a' + i);
        resetPopUp();
      });

      let newInputButton = document.querySelector(`.correctAmount-a${i}`);
      newInputButton.addEventListener('click', function () {
        let newInputValue = document.querySelector(`.a${i}-input-changer`).value;

        if (newInputValue == 0) {
          let removeThis = document.querySelector('.productInBasket-a' + i);
          removeThis.parentNode.removeChild(removeThis);
          localStorage.removeItem('a' + i);
        } else {
          let valueChangeLocalStorage = JSON.parse(window.localStorage.getItem('a' + i));
          valueChangeLocalStorage.value = parseInt(newInputValue);
          window.localStorage.setItem('a' + i, JSON.stringify(valueChangeLocalStorage));
        }

        resetPopUp();
      });
    }
  }
  let buyBtn = document.querySelector('.buyBtn');
  if (localStorage.length > 0) {

    buyBtn.addEventListener('click', function () {

      let removePopUpBasket = document.querySelector('.popUpBasket');
      removePopUpBasket.parentNode.removeChild(removePopUpBasket);
      document.getElementById('basket').src = "/images/shoppingcart.svg"

      let home = document.querySelector(".posterArticle");

      let formContainer = document.createElement('div');
      home.appendChild(formContainer);


      formContainer.className = "popUpBasket"
      formContainer.style.position = 'absolute';
      formContainer.style.zIndex = '15';
      formContainer.style.top = '80px';
      formContainer.style.width = '100%';
      formContainer.style.height = '100%';
      formContainer.style.overflow = 'auto';

      let finalCost = 0;
      for (let i = 1; i < 13; i++) {
        if (window.localStorage.getItem('a' + i)) {
          let finalCount = JSON.parse(localStorage.getItem('a' + i));
          finalCost += finalCount.value * finalCount.price;
        }
      }

      let formContent = document.createElement('form');
      formContent.className = "formContent"
      formContent.style.zIndex = '12';

      formContent.innerHTML = `<h1>Soon you can decorate your wall!</h1><br> 
      <div><input type="text" placeholder="First name"><input type="text" placeholder= "Surname"><br>
      <input type="email" placeholder="Email"><input type="text" placeholder="Number"></div><br>
      <h2>Total cost: ${finalCost} :- </h2><div><input type="text" placeholder="Cardnumber"></div><br>
      <div><input id="expirationDate" type="text" placeholder="Expiration date MM/ÅÅ"><input id="cvc" type="text" placeholder="CVC"></div>
      <div><button onclick="window.location='confirmpage.html'" class="confirm">Pay now</button>`;
      formContainer.appendChild(formContent);
    });
  }
}

function createBasket() {
  createPopUpBasket();
  createPopUpContent();
}

function createPopUpBasket() {
  // Create a section for basket that gives a shoddow on everything behind it
  let popUpBasket = document.createElement('div');
  popUpBasket.className = "popUpBasket sticky-basket";

  // Append popUp to site
  document.querySelector('.homePage').appendChild(popUpBasket);
}


function createPopUpContent() {
  // Create section for basket products
  document.getElementById('basket').src = "/images/cross.svg"
  let popUpContent = document.createElement('div');
  popUpContent.className = "popUpContent sticky-basket";
  popUpContent.innerHTML = `<div class="CartTitle"><h1>Cart</h1></div>`;
  document.querySelector('.popUpBasket').appendChild(popUpContent);
  createProductInBasket();

  popUpContent.innerHTML += `<div class="totalPriceSticker"><h3 id='totalSum'>Total cost: ${totalSum} :-</h3><br><button class="buyBtn">Go to checkout</button><button class="clearBasket">Clear cart</div>`;
  let clearBasket = document.querySelector('.clearBasket')
  clearBasket.addEventListener('click', function () {
    totalSum = 0;
    localStorage.clear();
    createPopUpContent();
  })
}

function createProductInBasket() {
  let sectionContainer = document.createElement('section');
  sectionContainer.className = 'sectionContainer';
  document.querySelector('.popUpContent').appendChild(sectionContainer);
  // Creation of products in the basket
  for (let i = 1; i < 13; i++) {
    if (window.localStorage.getItem('a' + i)) {
      let itemInLocalStorage = JSON.parse(window.localStorage.getItem('a' + i));
      let classNameForBasketProduct = 'a' + i;

      let itemInBasket = document.createElement('section');
      itemInBasket.className = 'productInBasket productInBasket-' + classNameForBasketProduct;
      itemInBasket.innerHTML = `<div class="basketImg"><img class='imgWrapper' src='${itemInLocalStorage.image}'></div><br>
      <div class="textProduct"><h2>${itemInLocalStorage.title}</h2>
      <br>
      <div class="change"><input class='${classNameForBasketProduct}-input-changer' type="number" min='0' value="${itemInLocalStorage.value}">
      <button class='buyButtonStyler correctAmount-a${i}'>Change amount</button></div>
      <button id='removeItem-a${i}'>Delete</button>
      <br>
      <h2 class='h2-${classNameForBasketProduct}'>${itemInLocalStorage.price * itemInLocalStorage.value}:-</h2>
      </div>`;
      sectionContainer.appendChild(itemInBasket)
      totalSum += (itemInLocalStorage.price * itemInLocalStorage.value);
    }
  };
};

function resetPopUp() {
  totalSum = 0;

  let removePopUpBasket = document.querySelector('.popUpBasket');
  removePopUpBasket.parentNode.removeChild(removePopUpBasket);

  getLocalStorage();
}

// animate shoppingcart Icon function
function animateCart() {
  console.log('it works!')
  let cartIcon = document.getElementById('basket')
  cartIcon.style.animationName = 'iconAnimate';
  cartIcon.style.animationDuration = '0.3s';
  cartIcon.style.animationIterationCount = '6';
  cartIcon.style.transform = 'scale(1.1)';
  cartIcon.style.animationTimingFunction = 'ease-in-out';
  cartIcon.style.animationDirection = 'alternate';

  animate(cartIcon)
}

function animate(cartIcon) {
  cartIcon.style.animationName = 'unset';
  cartIcon.style.animationDuration = 'unset';
  cartIcon.style.animationIterationCount = 'unset';
  cartIcon.style.transform = 'unset';
  cartIcon.style.animationTimingFunction = 'unset';
  cartIcon.style.animationDirection = 'unset';
}