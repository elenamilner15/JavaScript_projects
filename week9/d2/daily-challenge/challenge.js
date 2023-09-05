import greet from './greeting.js';
import { createColorfulMessage } from './colorful-message.js';
import { readFile } from './files/read-file.js';

const userName = 'Everybody'; // Replace with the user's name
const greetingMessage = greet(userName);
const colorfulMessage = createColorfulMessage('Colorful hello from Node.js!');

console.log(greetingMessage);
console.log(colorfulMessage);

readFile();