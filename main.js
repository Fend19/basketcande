// Börjar med skapandet av ruta som innehåller varje produkt
let productsArticle = document.querySelector('.posterArticle');

let productCounter = 0; // Needed to find index of products in forEach on row 20.


fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('err'));


function productContent(products) {
    let productArray = products.products;

    productArray.forEach(element => {
        // Creating container for each product
        let productSection = document.createElement('section');
        productSection.className = 'product-' + productCounter;
        document.querySelector('.posterArticle').appendChild(productSection);

        // *****Creating elements and placing them in productcontainer(aka productSection)*****

        // Creating a section for productTextInfo and for productImgWrapper
        let productTextInfo = document.createElement('section');
        productTextInfo.className = 'productTextInfo'
        let productImgWrapper = document.createElement('div');

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
        console.log(element.title);

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
        console.log(element.price);

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
            console.log(amountSelected);

        })

        console.log(productCounter);
        productCounter++; // Variable for the index of object in productArray
    });
}