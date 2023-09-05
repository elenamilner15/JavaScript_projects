import chalk from 'chalk';

const colorfulMessage = `
  ${chalk.bold.underline.yellow('Hello,')}
  ${chalk.bgBlue('Node.JS!')}  
`;

console.log(colorfulMessage);