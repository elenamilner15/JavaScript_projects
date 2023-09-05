import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readFile() {
    try {
        const filePath = path.join(__dirname, 'file-data.txt');

        const content = await fs.readFile(filePath, 'utf-8');

        console.log('File content:');
        console.log(content);
    } catch (err) {
        console.error('Error:', err);
    }
}

readFile();

