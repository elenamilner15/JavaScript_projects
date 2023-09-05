import fs from 'fs/promises';

async function copyFile() {
    try {
        const data = await fs.readFile('source.txt', 'utf8');

        await fs.writeFile('destination.txt', data, 'utf8');

        console.log('File copied successfully.');
    } catch (err) {
        console.error('Error:', err);
    }
}

copyFile();