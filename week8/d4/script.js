document.addEventListener('DOMContentLoaded', () => {

    const fetchButton = document.getElementById('fetch-button');
    const loadingMessage = document.querySelector('.loading');
    const characterInfo = document.querySelector('.character-info');
    const nameElement = document.getElementById('name');
    const heightElement = document.getElementById('height');
    const genderElement = document.getElementById('gender');
    const birthYearElement = document.getElementById('birth-year');
    const homeworldElement = document.getElementById('homeworld');
    const apiUrl = 'https://www.swapi.tech/api/people';


    async function fetchCharacter() {
        loadingMessage.style.display = 'block'; // Show loading message
        characterInfo.style.display = 'none'; // Hide character info

        const response = await fetch(apiUrl);
        const data = await response.json();
        const characters = data.results;


        const randomIndex = Math.floor(Math.random() * characters.length);
        const character = characters[randomIndex];
        // debugger

        const characterResponse = await fetch(character.url);
        const characterData = await characterResponse.json();
        const characterProperties = characterData.result.properties;


        nameElement.textContent = characterProperties.name;
        heightElement.textContent = characterProperties.height;
        genderElement.textContent = characterProperties.gender;
        birthYearElement.textContent = characterProperties.birth_year;
        // debugger


        // console.log(nameElement.textContent)
        // console.log(heightElement.textContent)
        // console.log(genderElement.textContent)
        // console.log(birthYearElement.textContent)


        const homeworldResponse = await fetch(characterProperties.homeworld);
        const homeworldData = await homeworldResponse.json();
        const planetProperties = homeworldData.result.properties;
        // console.log(planetProperties)
        homeworldElement.textContent = planetProperties.name;

        loadingMessage.style.display = 'none'; // Hide loading message
        characterInfo.style.display = 'block'; // Show character info


    }
    fetchButton.addEventListener('click', fetchCharacter);
});
