import fs from 'fs/promises';

async function readDirectory() {
    try {
        // Specify the directory path
        const directoryPath = './';

        // Read the list of files in the specified directory
        const files = await fs.readdir(directoryPath);

        // Display the list of file names
        console.log('Files in the directory:');
        files.forEach((file) => {
            console.log(file);
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

// Call the readDirectory function
readDirectory();
