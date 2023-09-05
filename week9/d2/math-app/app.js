const _ = require('lodash');

const math = require('./math.js');

const numbers = [1, 3, 5, 2, 4];
const maxNumber = _.max(numbers);
console.log(`Maximum number: ${maxNumber}`);

const sum = math.add(7, 3);
const product = math.multiply(4, 6);
console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
