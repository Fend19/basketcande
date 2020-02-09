// Code below gets the information in local storage 
function getLocalStorage(site) {
  for (let i = 1; i < 13; i++) {
    if (JSON.parse(window.localStorage.getItem('a' + i))) {
      let thisLocalStorage = window.localStorage.getItem('a' + i);
      let thisLocalStorageParsed = JSON.parse(thisLocalStorage);
      // console.log(thisLocalStorageParsed['title']);

      // Show popUp and store localStorage items
      popUp(thisLocalStorageParsed);
    } else {
      //  console.log('hittar inte någon me de namnet');


    }
  }
}

// Function below appends products to popUp (basket)
function productStorage(popUpContent, thisLocalStorageParsed, popUpBasket) {
  // Empty basket for every click
  popUpContent.innerHTML = "";
  popUpContent.innerHTML += `<h1>Varukorg</h1>`


  // Loops over localStorage to see what's in it and creates sections for each product
  // ***** WHY DOES IT CREATES 2 BASKETS(?((?(?)?)?)?) SO FCKING ANGRY ******
  for (let i = 1; i < localStorage.length; i++) {
    // console.log(thisLocalStorageParsed);

    let basketSection = document.createElement('section');
    basketSection.className = 'productBasket-' + [i];
    basketSection.innerHTML = `<div class="basketImg"><img class='imgWrapper' src='${thisLocalStorageParsed['image']}'></div><br>
    <div><h2>${thisLocalStorageParsed['title']}</h2><br>
    <input type="number" value="${thisLocalStorageParsed['value']}"><br>
    <h2>${thisLocalStorageParsed['price'] * thisLocalStorageParsed['value']}:-</h2>
    </div>`

    popUpContent.appendChild(basketSection)
    // console.log(localStorage.getItem(localStorage.key(i).title))
  }


  popUpContent.innerHTML += `<br><h3>Totalkostnad: TOTALKOSTNAD IN HÄR :-</h3><br><button class="buyBtn">Gå till kassa</button>`;
  popUpBasket.appendChild(popUpContent)


  // Append popUp to site
  site.appendChild(popUpBasket)

  let buyBtn = document.querySelector('.buyBtn');
  console.log('clicked buy button')

  buyBtn.addEventListener('click', function () {
    popUpBasket.style.display = 'none';
    form(site, buyBtn)
  })
}


// ******* Show PopUp *******
function popUp(thisLocalStorageParsed) {
  let popUpBasket = document.createElement('div');
  popUpBasket.className = "popUpBasket"
  popUpBasket.style.display = 'none';
  popUpBasket.style.position = 'absolute';
  popUpBasket.style.zIndex = '10';
  popUpBasket.style.top = '80px';
  popUpBasket.style.width = '100%';
  popUpBasket.style.height = '100%';
  popUpBasket.style.overflow = 'auto';
  popUpBasket.style.backgroundColor = '#000';
  popUpBasket.style.backgroundColor = 'rgb(0,0,0,0.3)';

  // Create a section for basket products
  let popUpContent = document.createElement('div');
  popUpContent.className = "popUpContent"

  function showPopUp(thisLocalStorageParsed) {
    if (popUpBasket.style.display === 'block') {
      popUpBasket.style.display = 'none';
    } else if (popUpBasket.style.display === 'none') {
      popUpBasket.style.display = 'block';
    }

    productStorage(popUpContent, thisLocalStorageParsed, popUpBasket)
  }

  // Basket button, click it to open basket *PopUp*
  let basketBtn = document.getElementById('basket');
  // Add eventlistener to basket to open popUp
  basketBtn.addEventListener('click', function () {
    showPopUp(thisLocalStorageParsed)
    console.log('clicked basketButton');

  })

  // When the user click anywhere else, close popup
  window.addEventListener('click', function () {
    if (event.target == popUpBasket) {
      popUpBasket.style.display = "none";
    }
  })
}

// ******* Show form *******
function form(site, button) {
  let formContainer = document.createElement('div');
  formContainer.className = "popUpBasket"
  formContainer.style.display = 'none';
  formContainer.style.position = 'absolute';
  formContainer.style.zIndex = '10';
  formContainer.style.top = '80px';
  formContainer.style.width = '100%';
  formContainer.style.height = '100%';
  formContainer.style.overflow = 'auto';
  formContainer.style.backgroundColor = '#000';
  formContainer.style.backgroundColor = 'rgb(0,0,0,0.3)';

  let formContent = document.createElement('form');
  formContent.className = "formContent"

  formContent.innerHTML = `<h1>Snart får din vägg ett nytt utseende!</h1><br> 
  <div><input type="text" placeholder="Förnamn"><input type="text" placeholder= "Efternamn"><br>
  <input type="email" placeholder="Email"><input type="text" placeholder="Mobilnr"></div><br>
  <h2>Totalsumma: *** SÄTT IN TOTALSUMMA *** </h2><div><input type="text" placeholder="Kortnummer"></div><br>
  <div><input id="expirationDate" type="text" placeholder="Utgångsdatum MM/ÅÅ"><input id="cvc" type="text" placeholder="CVC"></div>
  <div><button class="confirm">Betala nu</button>`;

  formContainer.appendChild(formContent)

  function showForm() {
    if (formContainer.style.display === 'block') {
      formContainer.style.display = 'none';
    } else if (formContainer.style.display === 'none') {
      formContainer.style.display = 'block';
    }
  }

  //Add eventlistener to basket to open popUp
  button.addEventListener('click', function () {
    showForm()
  })

  // When the user click anywhere else, close popup
  window.addEventListener('click', function () {
    if (event.target == formContainer) {
      formContainer.style.display = "none";
    }
  })

  // Append popUp to 
  site.appendChild(formContainer)
}