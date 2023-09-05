import { readFileSync, writeFileSync } from 'fs';

// Function to read the content of a specified file
export function readFile(filename) {
    try {
        const content = readFileSync(filename, 'utf8');
        return content;
    } catch (error) {
        console.error(`Error reading file "${filename}":`, error.message);
        return null;
    }
}

// Function to write content to a specified file
export function writeFile(filename, content) {
    try {
        writeFileSync(filename, content);
        console.log(`File "${filename}" has been successfully written.`);
    } catch (error) {
        console.error(`Error writing to file "${filename}":`, error.message);
    }
}
