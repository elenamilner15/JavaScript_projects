// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.


// makeAllCaps()

function uppercase(arr) {
    return arr.map(item => item.toUpperCase());
}

function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(item => typeof item === 'string')) {
            const output = arr.map(item => item.toUpperCase());
            resolve(output);
        } else {
            reject(`not all items are type of string `);
        }
    });
}

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function sortWords(output) {
    return new Promise((resolve, reject) => {
        if (output.length > 4) {
            const output2 = output.sort();
            resolve(output2);
        } else {
            reject('The array length is not bigger than 4.');
        }
    });
}
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log("Example 1: ", result))
    .catch(error => console.log("Example 1: ", error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log("Example 2: ", result))
    .catch(error => console.log("Example 2: ", error))

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log("Example 3: ", result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log("Example 3: ", error))


// 2nd Daily Challenge

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


// convert JSON to morse javascript object
function toJs() {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(morse);
        if (Object.keys(morseObject).length === 0) {
            reject(new Error("Morse object is empty"));
        } else {
            resolve(morseObject);
        }
    });
}
// translate to morse code
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const inputElement = document.getElementById("textInput");
        const input = inputElement.value.trim();
        // debugger
        if (!input) {
            reject(new Error("there is no text"));
        } else {
            const lowerInput = input.toLowerCase();
            const morseArray = [];
            for (const char of lowerInput) {
                if (char === " ") {
                    morseArray.push(" ");
                } else if (morseJS[char]) {
                    morseArray.push(morseJS[char]);
                } else {
                    reject(new Error(`"${char}" does not converted to Morse code`));
                    return;
                }
            }
            resolve({ morseArray, input });
        }
    });
}

function joinWords(morseTranslation, input) {
    const morseText = morseTranslation.join("<br>");
    const morseTranslationElement = document.getElementById("morseTranslation");
    morseTranslationElement.innerHTML = `${input}<br>${morseText}`;
}

const translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", () => {
    toJs()
        .then(morseJS => toMorse(morseJS))
        .then(({ morseArray, input }) => joinWords(morseArray, input))
        .catch(error => {
            console.error(error.message);
        });
});