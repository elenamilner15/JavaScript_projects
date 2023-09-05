import { readFile, writeFile } from './fileManager.js';

const helloWorldContent = readFile('HelloWorld.txt');

if (helloWorldContent) {
    console.log('Content of "HelloWorld.txt":');
    console.log(helloWorldContent);

    writeFile('ByeWorld.txt', 'Writing to the file');
}