const products = require('./products');

function searchProductByName(productName) {
    const product = products.find(product => product.name === productName);

    if (product) {
        console.log(`Product Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

searchProductByName("Milk");
searchProductByName("Mango");
searchProductByName("Salt");

