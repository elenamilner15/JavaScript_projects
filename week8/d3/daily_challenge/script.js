const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifForm = document.getElementById('gifForm');
const categoryInput = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAll');

gifForm.addEventListener('submit', fetchAndAppendGif);
deleteAllButton.addEventListener('click', deleteAllGifs);

async function fetchAndAppendGif(event) {
    event.preventDefault();

    const category = categoryInput.value.trim();
    if (!category) return;

    try {
        const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        const gifUrl = data.data.images.downsized.url;

        const gifElement = createGifElement(gifUrl, category);
        gifContainer.appendChild(gifElement);

        categoryInput.value = '';
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function createGifElement(gifUrl, category) {
    const gifElement = document.createElement('div');
    gifElement.classList.add('gif-item');

    const img = document.createElement('img');
    img.src = gifUrl;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        gifContainer.removeChild(gifElement);
    });

    gifElement.appendChild(img);
    gifElement.appendChild(deleteButton);

    return gifElement;
}

function deleteAllGifs() {
    gifContainer.innerHTML = '';
}
