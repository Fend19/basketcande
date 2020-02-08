// ******* LocalStorage checkout *******
// Code below gets the information in local storage 
function getLocalStorage(site) {
  for (let i = 1; i < 13; i++) {
    if (JSON.parse(window.localStorage.getItem('a' + i))) {
      let thisLocalStorage = window.localStorage.getItem('a' + i);
      let thisLocalStorageParsed = JSON.parse(thisLocalStorage);
      //  console.log(thisLocalStorageParsed);
      // Show popUp and store localStorage items
      popUp(site, thisLocalStorageParsed);
    } else {
      //  console.log('hittar inte någon me de namnet');


    }
  }
}


// ******* Show PopUp *******
function popUp(site, thisLocalStorageParsed) {
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

  let basketBtn = document.getElementById('basket');

  let popUpContent = document.createElement('div');
  popUpContent.className = "popUpContent"

  popUpContent.innerHTML += `<h1>Varukorg</h1>`

  for (let i = 0; i < window.localStorage.length; i++) {
    popUpContent.innerHTML += `<section class="productBasket"<div class="basketImg"><img class='imgWrapper' src='${thisLocalStorageParsed.image}'></div><br>
  <div><h2>${thisLocalStorageParsed.title}</h2><br>
  <input type="number" value="${thisLocalStorageParsed.value}"><br>
  <h2>${thisLocalStorageParsed.price}:-</h2>
  </div></section>`
  }

  popUpContent.innerHTML += `<br><button class="buyBtn">Gå till kassa</button>`


  popUpBasket.appendChild(popUpContent)

  function showPopUp() {
    if (popUpBasket.style.display === 'block') {
      popUpBasket.style.display = 'none';
    } else if (popUpBasket.style.display === 'none') {
      popUpBasket.style.display = 'block';
    }
  }

  // Add eventlistener to basket to open popUp
  basketBtn.addEventListener('click', function () {
    showPopUp()
  })

  // When the user click anywhere else, close popup
  window.addEventListener('click', function () {
    if (event.target == popUpBasket) {
      popUpBasket.style.display = "none";
    }
  })

  // Append popUp to 
  site.appendChild(popUpBasket)

  let buyBtn = document.querySelector('.buyBtn')

  buyBtn.addEventListener('click', function () {
    popUpBasket.style.display = 'none';
    form(site, buyBtn)
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

  formContent.innerHTML = ` < h1 > Snart får din vägg ett nytt utseende! < /h1> <br> <
    div > < input type = "text"
  placeholder = "Förnamn" > < input type = "text"
  placeholder = "Efternamn" > < br >
    <
    input type = "email"
  placeholder = "Email" > < input type = "text"
  placeholder = "Mobilnr" > < /div><br> <
    h2 > Total summa: ** * SÄTT IN TOTALSUMMA ** * < /h2> <div><input type="text" placeholder="Kortnummer"></div > < br >
    <
    div > < input id = "expirationDate"
  type = "text"
  placeholder = "Utgångsdatum MM/ÅÅ" > < input id = "cvc"
  type = "text"
  placeholder = "CVC" > < /div> <
    div > < button class = "confirm" > Betala nu < /button>`;

  formContainer.appendChild(formContent)

  function showForm() {
    if (formContainer.style.display === 'block') {
      formContainer.style.display = 'none';
    } else if (formContainer.style.display === 'none') {
      formContainer.style.display = 'block';
    }
  }

  // Add eventlistener to basket to open popUp
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