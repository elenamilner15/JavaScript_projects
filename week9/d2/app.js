// Import the array of person objects from the data.js module
import persons from './data.js';

// Function to calculate and print the average age of persons
function calculateAverageAge(persons) {
    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / persons.length;
    console.log(`Average Age of Persons: ${averageAge.toFixed(2)}`);
}

// Call the function with the imported array
calculateAverageAge(persons);
