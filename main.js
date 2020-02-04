// Börjar med skapandet av varje produkts ruta - Christopher
let productSection = document.querySelector('.posterMenu');

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
        console.log(element);
        
    });
}






