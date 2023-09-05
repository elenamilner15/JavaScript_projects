import fs from 'fs/promises';

async function copyFile() {
    try {
        // Read the content from source.txt
        const data = await fs.readFile('source.txt', 'utf8');

        // Write the content to destination.txt
        await fs.writeFile('destination.txt', data, 'utf8');

        console.log('File copied successfully.');
    } catch (err) {
        console.error('Error:', err);
    }
}

// Call the copyFile function
copyFile();