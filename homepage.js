 let productsArticle = document.querySelector(".posterArticle");

 fetch("main.json")
   .then(resp => resp.json())
   .then(json => productCreation(json))
   .catch(err => console.log("error"));

 function productCreation(json) {
   let productArray = json;
   //  console.log(productArray);

   // Creating container for each product

   for (let i = 1; i < 13; i++) {

     let productSection = document.createElement("section");
     productSection.className = 'a' + i;
     productSection.classList.add(productArray['a' + i].category);
     productSection.style.display = "grid";
     productSection.innerHTML = `
      <div class='productImgWrapper'>
      <img class='imgWrapper' src='${productArray['a'+i].image}'>
      </div>
      <section class='productTextInfo'>
      <h3>${productArray['a'+i].title}</h3>
      <p>${productArray['a'+i].description}</p>
      <h4>Price: ${productArray['a'+i].price}:-</h4>
      <input type='number' class='${'a'+i}-input' min='1' value='1'>
      <button class='buyButtonStyler addToCart-${'a'+i}'>Add to Cart</button>
      </section>`;

     //  console.log(productArray['a' + i].image)

     document.querySelector(".posterArticle").appendChild(productSection);

     // Adding eventlistener to the buybutton to get value of quantity selected
     let inputValue = document.querySelector(`.${'a'+i}-input`);
     let buyButton = document.querySelector(`.addToCart-${'a'+i}`);
     let amountSelected = 0;
     buyButton.addEventListener('click', function () {
       if (JSON.parse(localStorage.getItem(`a${i}`))) {
         let currentValue = JSON.parse(localStorage.getItem(`a${i}`)).value;
         amountSelected = currentValue;
       } else {
         amountSelected = 0;
       };

       amountSelected += parseInt(inputValue.value);
       productArray['a' + i].value = amountSelected;
       let newProductArray = `${JSON.stringify(productArray['a'+i])}`;

       // Set localStorage-Key to objects content and the value as totalamount of products the user has selected
       localStorage.setItem(`a${i}`, newProductArray);
       //  console.log(newProductArray);
     })
   }
 }



 // Eventlistener for buttons that sorts the products within if's so they dont cause errors in the shoppingcart-page
 let showAll = document.querySelector(".showAll");
 showAll.addEventListener("click", sortingHat);
 let showNature = document.querySelector(".showNature");
 showNature.addEventListener("click", sortingHat);
 let showAnimals = document.querySelector(".showAnimals");
 showAnimals.addEventListener("click", sortingHat);


 // Creating filtering for all/nature/animals-button
 //Function that hides/shows classes 'nature' and 'animals'
 function sortingHat() {
   let category = this.innerText.toString().toLowerCase();
   let showEverything = document.querySelectorAll(".nature, .animals");
   showEverything.forEach(element => {
     element.style.display = "grid";
   });
   let hideNature = document.querySelectorAll(".posterArticle > .nature");
   let hideAnimals = document.querySelectorAll(".posterArticle > .animals");

   if (category === "nature") {
     hideAnimals.forEach(element => {
       element.style.display = "none";
       productsArticle.style.gridTemplate = "1fr 1fr 1fr / 1fr 1fr 1fr";
     });
   } else if (category === "animals") {
     hideNature.forEach(element => {
       element.style.display = "none";
       productsArticle.style.gridTemplate = "1fr 1fr / 1fr 1fr 1fr";
     });
   }
 }

 //  let storageTest = document.createElement('div');
 //  storageTest.className = 'localTest';
 //  document.querySelector('main').appendChild(storageTest);

 //  // Code below gets the information in local storage 
 //  let site = document.querySelector('.homePage');
 //  getLocalStorage(site)