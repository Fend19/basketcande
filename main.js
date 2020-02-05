// Börjar med skapandet av varje produkts ruta - Christopher
let productsArticle = document.querySelector('.posterArticle');

let productCounter = 0; // Needed to find index of products in forEach on row 20.


fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('err'))
;


function productContent(products){
    // console.log(products.products[0]);
    let productArray = products.products;
    // let testar = JSON.stringify(products.products);
    // console.log(productArray[0]);

    productArray.forEach(element => {
        // Creating container for each product
        let productSection = document.createElement('section');
        productSection.className = 'product-' + productCounter;
        // productSection.classList.add('productSection');
        document.querySelector('.posterArticle').appendChild(productSection);

            // *****Creating elements and placing them in productcontainer(aka productSection)*****
        // Creating product-headline
        let productHeadline = document.createElement('h3');
        productHeadline.innerText = element.title;
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productHeadline);
        console.log(element.title);
        // Creating product-image
        let productImage = document.createElement('img');
        productImage.setAttribute('src', element.image);
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productImage);
        // Creating product "information"
        let productLorem = document.createElement('p');
        productLorem.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productLorem);
        // Creating product-pricetag
        let productPrice = document.createElement('h4');
        productPrice.innerText = 'Price: ' + element.price;
        document.querySelector("[class=product-" + productCounter + "]").appendChild(productPrice);
        console.log(element.price);
        // Creating input for amount of specified product the should be added to the basket
        let productAmount = document.createElement('input');
        productAmount.type = 'number';
        productAmount.min = 1;
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
            
        })

        console.log(productCounter);
        productCounter++; // Variable for the index of object in productArray
    });
}






