// Exercise 1 : Location
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
//____________________________________________________________
// Exercise 2: Display Student Info
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'

function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}
output = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
console.log(output);
//____________________________________________________________

// Exercise 3: User & Id
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


const users = { user1: 18273, user2: 92833, user3: 90315 }
array = Object.entries(users)
for (let [key, value] of Object.entries(users)) {
    console.log(key, value * 2);
}


// Exercise 4 : Person Class
// Analyze the code below. What will be the output?
class Person {
    constructor(name) {
        this.name = name;
    }
}
const member = new Person('John');
console.log(typeof member);
//object

// Exercise 5 : Dog Class
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};
// Analyze the options below.Which constructor will successfully extend the Dog class?
// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }

// };
//No!!!!!!!!!!


// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    output() {
        console.log(`${this.name} very big. His size is ${this.size}`);
    }
};
//Yes
let labrador = new Labrador('Rex', "L");
labrador.output();
console.log(labrador)

// 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };
//No



// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

//No

// Exercise 6 : Challenges
// Evaluate these(ie True or False)



function fff(num1, num2) {
    return num1 === num2;
}

// Example usage
console.log(fff([2], [2]));//false
console.log(fff({}, {}));//false
//arrays and objects are reference types, they refer to different memory locations, the comparison is false

// What is, for each object below, the value of the property number and why ?

const object1 = { number: 5 }; //4 because object1.number = 4;
const object2 = object1;//4 because object2=object1.number = 4;
const object3 = object2;//4 object3=because object2=object1.number = 4;
const object4 = { number: 5 };//5

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)


// Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin ect …
// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    sound(sound) {
        return `${sound}, I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mamal('Lily', 'cow', 'brown and white');

console.log(farmerCow.sound("Mooooooooooo"));






