// Börjar med skapandet av varje produkts ruta - Christopher
// let productSection = document.querySelector('.posterMenu');
// console.log(productSection);
// let product = []
// let productHeadline = [];
// let productImage = []   //Need to add url for all the images

fetch('main.json')
    .then(resp => resp.json())
    .then(json => productContent(json))
    .catch(err => console.log('err'))
;


function productContent(products){
    console.log(products.products[0]);
    let testar = JSON.stringify(products);
    console.log(testar);
    
    for(let i=0; i>12; i++){
        console.log(products.products[3]);
        
        // product[i] = document.createElement('artile');
        // productSection.appendChild(product[i]);
        // console.log(productSection);
        // productHeadline[i] = document.createElement('h3');
        // product[i].appendChild(productHeadline[i]);
        // console.log(product[i]);
    
        
        
    };
}





