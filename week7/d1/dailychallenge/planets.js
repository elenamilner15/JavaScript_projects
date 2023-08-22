
planets = [
    { name: "Mercury", bgColor: "gray", moons: 0 },
    { name: "Venus", bgColor: "orange", moons: 0 },
    { name: "Earth", bgColor: "blue", moons: 1 },
    { name: "Mars", bgColor: "red", moons: 2 },
    { name: "Jupiter", bgColor: "beige", moons: 195 },
    { name: "Saturn", bgColor: "white", moons: 146 },
    { name: "Uran", bgColor: "blue", moons: 27 },
    { name: "Neptun", bgColor: "turquoise", moons: 14 },
];

const listPlanets = document.querySelector(".listPlanets");

planets.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.className = "planet";
    planetDiv.style.backgroundColor = planet.bgColor;

    const planetName = document.createElement("p");
    planetName.textContent = planet.name;

    planetDiv.appendChild(planetName);

    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement("div");
        moon.className = "moon";
        planetDiv.appendChild(moon);
    }

    listPlanets.appendChild(planetDiv);
});





