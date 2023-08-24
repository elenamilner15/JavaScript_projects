// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:
funcOne()
//_______________________
//Answer: a=3
//_______________________

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
//_______________________
//Answer: error with asignment of const
//_______________________


//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()

//_______________________
//Answer: 
// funcThree() - inside the funcThree function 0
// funcTwo() a=5
// funcThree() - inside the funcThree function 0
//__________________________

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//_______________________
//Answer: 
// funcThree() - inside the funcThree function 0
// funcTwo() error with asignment of const
//__________________________

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
//_______________________
//Answer: inside the funcFive function hello
//__________________________

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
//_______________________
//Answer: inside the funcFive function test
//__________________________

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
//_______________________
//Answer: inside the funcFive function test
//_______________________


//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//____________________
// Answer: in the if block 5
// outside of the if block 2
//____________________

// #5.2 What will happen if the variable is declared
// with const instead of let ?
//____________________
// Answer: in the if block 5
// outside of the if block 2
//____________________

// Exercise 2 : Ternary Operator
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// function winBattle() {
//     return true;
// }

const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);
//10

// Exercise 3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// const isString = function (x) {
//     if (typeof x === "string") {
//         return true;
//     } else {
//         return false;
//     }
// };

const isString = (x) => typeof x === "string";
console.log(isString("Hello"));  // Output: true
console.log(isString(123));      // Output: false

// Exercise 4 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const x = (a, b) => a + b;
console.log(x(2, 3));
// 5

// Exercise 5 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. 
// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// Function declaration
function weight_decl(x) {
    return x * 1000
}
console.log(weight_decl(5))// Invoking function declaration


// Function expression
const weight_expr = function (x) {
    return x * 1000;
};
console.log(weight_expr(6));  // Invoking function expression

// Function declaration can be called before its definition

// Arrow Function
const weight_arrow = x => x * 1000;
console.log(weight_arrow(7));  // Invoking arrow function



// Exercise 6 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function (amount_kids, partner_name, city, job_title) {
    console.log(`You will be a ${job_title} in ${city}, and married to ${partner_name} with ${amount_kids} kids`);
})(5, 'Moshe', 'Tel Aviv', 'doctor')


