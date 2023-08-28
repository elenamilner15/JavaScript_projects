// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10`);
        } else {
            reject(`${num} is greater than 10`);
        }
    });
}

// Test cases
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
console.log("start")
let promise1 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve('success');
    }, 4000)

});
// console.log(promise1)
promise1.then(result => {
    console.log(result); // Output: success
});

// 🌟 Exercise 3 : Resolve & Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(result => {
    console.log("Resolved:", result); // Output: Resolved: 3
});
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => {
    console.log("Rejected:", error);
});
