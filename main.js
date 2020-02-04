// Börjar med skapandet av varje produkts ruta - Christopher
let productsArticle = document.querySelector('.posterArticle');

let productCounter = 0; // Needed to find index of products in forEach on row 20.


fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('err'))
;


function productContent(products){
    console.log(products.products[0]);
    let productArray = products.products;
    // let testar = JSON.stringify(products.products);
    console.log(productArray[0]);

    productArray.forEach(element => {
        let productSection = document.createElement('section', {id: productCounter});
        productSection.className = 'product-' + productCounter;
        document.querySelector('.posterArticle').appendChild(productSection);


        console.log(productCounter);
        productCounter++; // Variable for the index of object in productArray
    });
}






