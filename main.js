// ******* Show PopUp *******
function popUp(site) {
  let popUpBasket = document.createElement('div')
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

  popUpContent.innerHTML = `<p> Test </p>`;

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
}