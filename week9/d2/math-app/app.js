// Require the lodash package
const _ = require('lodash');

// Require the custom math module
const math = require('./math.js');

// Use lodash to find the maximum of an array
const numbers = [1, 3, 5, 2, 4];
const maxNumber = _.max(numbers);
console.log(`Maximum number: ${maxNumber}`);

// Use the custom math module to perform calculations
const sum = math.add(7, 3);
const product = math.multiply(4, 6);
console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
