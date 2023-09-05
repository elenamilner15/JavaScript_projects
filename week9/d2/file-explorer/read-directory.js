import fs from 'fs/promises';

async function readDirectory() {
    try {
        const directoryPath = './';

        const files = await fs.readdir(directoryPath);

        console.log('Files in the directory:');
        files.forEach((file) => {
            console.log(file);
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

readDirectory();
