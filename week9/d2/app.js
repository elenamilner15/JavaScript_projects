import persons from './data.js';

function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / persons.length;
    console.log(`Average Age of Persons: ${averageAge.toFixed(2)}`);
}

calculateAverageAge(persons);
