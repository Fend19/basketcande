// Börjar med skapandet av ruta som innehåller varje produkt
let productsArticle = document.querySelector('.posterArticle');

let productCounter = 0; // Needed to find index of products in forEach on row 20.


fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('err'));


function productContent(products){
    let productArray = products.products;
    console.log(productArray);
    
    productArray.forEach(element => {
        console.log(element.category);
        


        // Creating container for each product
        let productSection = document.createElement('section');
        productSection.className = 'product-' + productCounter;
        document.querySelector('.posterArticle').appendChild(productSection);

        // *****Creating elements and placing them in productcontainer(aka productSection)*****
            // Creating product-headline
        let productHeadline = document.createElement('h3');
        productHeadline.innerText = element.title;
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productHeadline);
            // Creating product-image
        let productImage = document.createElement('img');
        productImage.setAttribute('src', element.image);
        productImage.className = 'imgWrapper';
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productImage);
            // Creating product "information"
        let productLorem = document.createElement('p');
        productLorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productLorem);
            // Creating product-pricetag
        let productPrice = document.createElement('h4');
        productPrice.innerText = 'Price: ' + element.price;
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productPrice);
            // Creating input for amount of specified product the should be added to the basket
        let productAmount = document.createElement('input');
        productAmount.type = 'number';
        productAmount.min = 1;
        productAmount.value = 1;
        productAmount.placeholder = 'Amount';
        productAmount.className = productCounter + '-input';
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productAmount);

            // Creating buy-button for product
        let productButtonBuy = document.createElement('button');
        productButtonBuy.innerText = 'Add to Cart';
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productButtonBuy);

            // Adding eventlistener to the buybutton to get value of quantity selected
        let amountSelected = 0;
        productButtonBuy.addEventListener('click', function(){
            amountSelected += parseInt(productAmount.value);
            console.log(amountSelected);
            
        });

            // Added category nature/animal as class to productSections
        productSection.classList.add(element.category);
        
        
        productCounter++; // Variable for the index of object in productArray
    });
};


            // Creating filtering for all/nature/animals-button
    //Function that hides/shows classes 'nature' and 'animals'
function sortingHat(){
    let category = this.innerText.toString().toLowerCase();
    let showEverything = document.querySelectorAll('.nature, .animals');
    showEverything.forEach(element => {
        element.hidden = false;
    });
    let hideNature = document.querySelectorAll('.nature');
    let hideAnimals = document.querySelectorAll('.animals');
    
    if (category === 'nature') {
        hideAnimals.forEach(element => {
            element.hidden = true;
        });
        hideNature.forEach(element => {
            element.hidden = false;
        });
    } else if (category === 'animals') {
        hideNature.forEach(element => {
        element.hidden = true;
        });
        hideAnimals.forEach(element => {
            element.hidden = false;
        });
    };
};

            // Eventlistener for buttons that sorts the products
let showAll = document.querySelector('.showAll');
showAll.addEventListener('click', sortingHat);

let showNature = document.querySelector('.showNature');
showNature.addEventListener('click', sortingHat);

let showAnimals = document.querySelector('.showAnimals');
showAnimals.addEventListener('click', sortingHat);


