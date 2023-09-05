// Require the product objects from the products.js module
const products = require('./products');

// Create a function to search for a product by name
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

// Call the function with different product names
searchProductByName("Milk");
searchProductByName("Mango");
searchProductByName("Salt");

