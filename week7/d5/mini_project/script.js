const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];
//________________________________________

const robotCards = document.getElementById('robotCards');

function createRobotCard(robot) {
    const card = document.createElement('div');
    card.className = 'robot-card';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'robot-image';
    const image = document.createElement('img');
    image.src = robot.image;
    image.alt = robot.name;

    const textContainer = document.createElement('div');
    textContainer.className = 'robot-text';

    const name = document.createElement('h2');
    name.textContent = robot.name;

    const username = document.createElement('p');
    username.textContent = `Username: ${robot.username}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${robot.email}`;

    imageContainer.appendChild(image);

    textContainer.appendChild(name);
    textContainer.appendChild(username);
    textContainer.appendChild(email);

    card.appendChild(imageContainer);
    card.appendChild(textContainer);

    return card;
}

function displayRobots(robots) {
    //clear content!!!
    robotCards.innerHTML = '';
    robots.forEach(robot => {
        const card = createRobotCard(robot);
        robotCards.appendChild(card);
    });
}

const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchBox.value.toLowerCase();
        // debugger
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchTerm) ||
            robot.username.toLowerCase().includes(searchTerm)
        );

        displayRobots(filteredRobots);
        console.log(filteredRobots)
        // debugger
    }
});


// display all robots
displayRobots(robots);

