// Import the functions from the fileManager.js module
import { readFile, writeFile } from './fileManager.js';

// Read the content of "Hello World.txt"
const helloWorldContent = readFile('HelloWorld.txt');

if (helloWorldContent) {
    console.log('Content of "HelloWorld.txt":');
    console.log(helloWorldContent);

    // Write content to "Bye World.txt"
    writeFile('ByeWorld.txt', 'Writing to the file');
}