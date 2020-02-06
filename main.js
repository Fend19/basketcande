// Börjar med skapandet av ruta som innehåller varje produkt
let productsArticle = document.querySelector('.posterArticle');

let productCounter = 0; // Needed to find index of products in forEach on row 20.


fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('error'));


function productContent(products) {
    let productArray = products.products;
    console.log(productArray);
    
    productArray.forEach(element => {
        


        // Creating container for each product
        let productSection = document.createElement('section');
        productSection.className = 'product-' + productCounter;
        productSection.style.display = 'grid';
        document.querySelector('.posterArticle').appendChild(productSection);

        // *****Creating elements and placing them in productcontainer(aka productSection)*****

        // Creating a section for productTextInfo and for productImgWrapper
        let productTextInfo = document.createElement('section');
        productTextInfo.className = 'productTextInfo'
        let productImgWrapper = document.createElement('div');
        productImgWrapper.className = 'productImgWrapper';

        // Creating product-image
        let productImage = document.createElement('img');
        productImage.setAttribute('src', element.image);
        productImage.className = 'imgWrapper';
        productImgWrapper.appendChild(productImage);
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productImgWrapper);

        // Creating product-headline
        let productHeadline = document.createElement('h3');
        productHeadline.innerText = element.title;
        productTextInfo.appendChild(productHeadline)
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productTextInfo);

        // Creating product "information"
        let productLorem = document.createElement('p');
        productLorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        productTextInfo.appendChild(productLorem)
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productTextInfo);

        // Creating product-pricetag
        let productPrice = document.createElement('h4');
        productPrice.innerText = 'Price: ' + element.price + ':-';
        productTextInfo.appendChild(productPrice)
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productTextInfo);

        // Creating input for amount of specified product that should be added to basket
        let productAmount = document.createElement('input');
        productAmount.type = 'number';
        productAmount.min = 1;
        productAmount.placeholder = '1';
        productAmount.className = productCounter + '-input';
        productTextInfo.appendChild(productAmount);

        // Creating buy-button for product
        let productButtonBuy = document.createElement('button');
        productButtonBuy.innerText = 'Add to Cart';
        productButtonBuy.className = 'buyButtonStyler';
        productTextInfo.appendChild(productButtonBuy)
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productTextInfo);

        // Adding eventlistener to the buybutton to get value of quantity selected
        let amountSelected = 0;
        productButtonBuy.addEventListener('click', function () {
            amountSelected += parseInt(productAmount.value);
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
        element.style.display = 'grid';
    });
    let hideNature = document.querySelectorAll('.posterArticle > .nature');
    let hideAnimals = document.querySelectorAll('.posterArticle > .animals');
    
    if (category === 'nature') {
        hideAnimals.forEach(element => {
            element.style.display = 'none';
            productsArticle.style.gridTemplate = '1fr 1fr 1fr / 1fr 1fr 1fr';
        });

    } else if (category === 'animals') {
        hideNature.forEach(element => {
            element.style.display = 'none';
            productsArticle.style.gridTemplate = '1fr 1fr / 1fr 1fr 1fr';
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


