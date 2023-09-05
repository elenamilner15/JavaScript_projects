
// Import chalk using ES6 import syntax
import chalk from 'chalk';

// Create a colorful message
const colorfulMessage = `
  ${chalk.bold.underline.yellow('Hello,')}
  ${chalk.bgBlue('Node.JS!')}  
`;

// Print the colorful message
console.log(colorfulMessage);