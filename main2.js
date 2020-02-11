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
  for (let i = 1; i < 13; i++) {
    if (document.querySelector(`#removeItem-a${i}`)) {
      
      let removeItem = document.getElementById(`removeItem-a${i}`);
      console.log(removeItem);
      removeItem.addEventListener('click', function () {
        let removeThis = document.querySelector('.productInBasket-a'+i);
        removeThis.parentNode.removeChild(removeThis);
        localStorage.removeItem('a' + i);
        resetPopUp();
      });

      let newInputButton = document.querySelector(`.correctAmount-a${i}`);
      console.log(newInputButton);
      newInputButton.addEventListener('click', function () {
        let newInputValue = document.querySelector(`.a${i}-input-changer`).value;
        console.log(newInputValue);
        
        if (newInputValue == 0) {
          let removeThis = document.querySelector('.productInBasket-a'+i);
          removeThis.parentNode.removeChild(removeThis);
          localStorage.removeItem('a' + i);
        }else{
          let valueChangeLocalStorage = JSON.parse(window.localStorage.getItem('a' + i));
          valueChangeLocalStorage.value = parseInt(newInputValue);
          console.log(valueChangeLocalStorage);
          window.localStorage.setItem('a' + i, JSON.stringify(valueChangeLocalStorage));
          console.log(JSON.parse(window.localStorage.getItem('a' + i)));
        }

        resetPopUp();
      });
    }
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

    popUpContent.innerHTML += `<br><h3 id='totalSum'>Totalkostnad: ${totalSum} :-</h3><br><button class="buyBtn">Gå till kassa</button>`;

}

function createProductInBasket() {
  // Creation of products in the basket
  for (let i = 1; i < 13; i++) {
    if (window.localStorage.getItem('a' + i)) {
      let itemInLocalStorage = JSON.parse(window.localStorage.getItem('a' + i));
      let classNameForBasketProduct = 'a'+i;
      

      let itemInBasket = document.createElement('section');
      itemInBasket.className = 'productInBasket productInBasket-' + classNameForBasketProduct;
      itemInBasket.innerHTML = `<div class="basketImg"><img class='imgWrapper' src='${itemInLocalStorage.image}'></div><br>
      <div><h2>${itemInLocalStorage.title}</h2>
      <br>
      <input class='${classNameForBasketProduct}-input-changer' type="number" min='0' value="${itemInLocalStorage.value}">
      <br><button class='buyButtonStyler correctAmount-a${i}'>Ändra antal</button>
      <button id='removeItem-a${i}'>Ta bort</button>
      <br>
      <h2 class='h2-${classNameForBasketProduct}'>${itemInLocalStorage.price * itemInLocalStorage.value}:-</h2>
      </div>`;
      document.querySelector('.popUpContent').appendChild(itemInBasket);
      console.log(totalSum);
      totalSum += (itemInLocalStorage.price * itemInLocalStorage.value);
      console.log(itemInLocalStorage.price);
      console.log(itemInLocalStorage.value);
      console.log(`.${classNameForBasketProduct}`);
    } else {
      console.log('hittar inte någon me de namnet');
    };
  };
  let buyBtn = document.querySelector('.buyBtn');
  console.log(buyBtn)
};

function resetPopUp () {
  totalSum = 0;
        
  let removePopUpBasket = document.querySelector('.popUpBasket');
  removePopUpBasket.parentNode.removeChild(removePopUpBasket);
  
  getLocalStorage();
}