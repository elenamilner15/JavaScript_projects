// Exercise 1 : Find The Numbers Divisible By 23
// function displayNumbersDivisible() {
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//         if (i % 23 === 0) {
//             console.log(i); sum += i;
//         }
//     } console.log(sum);
// }
// displayNumbersDivisible();

// Exercise 2 : Shopping List
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let sum = 0;

    for (x of shoppingList) {
        if (stock[x] > 0) {
            sum += prices[x];
            stock[x]--;
        }
    }

    console.log(sum);
    console.log(stock);

}
myBill()

// Exercise 3 : What’s In My Wallet ?
function changeEnough(itemPrice, amountOfChange) {
    quarters = amountOfChange[0] * 0.25;
    dimes = amountOfChange[1] * 0.10;
    nickels = amountOfChange[2] * 0.05;
    pennies = amountOfChange[3] * 0.01;

    totalChange = quarters + dimes + nickels + pennies;

    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true


// Exercise 4 : Vacations Costs
function hotelCost() {
    let hotel_val;
    do {
        hotel_val = prompt("Enter a number of nights in hotel");
        if (hotel_val === "") {
            console.log("Please enter a number of nights");
        }
        else if (isNaN(hotel_val)) {
            console.log("Please enter a valid number of nights");
        }
        else {
            hotel_total = Number(hotel_val) * 140
            console.log(hotel_total)
            return hotel_total;
        }
    } while (true);
}
function planeRideCost() {
    let plane_val;
    do {
        plane_val = prompt("Enter a destination");
        if (plane_val === "") {
            console.log("Please enter a destination");
        }
        else if (typeof plane_val !== "string") {
            console.log("Please enter a valid destination");
        }
        else if (plane_val.toLowerCase() === "london") {
            plane_total = 183;
        }
        else if (plane_val.toLowerCase() === "paris") {
            plane_total = 220;
        }
        else {
            plane_total = 300;
            console.log(plane_total)
            return plane_total;
        }
    } while (true);
}

function rentalCarCost() {
    let rental_val;
    do {
        rental_val = prompt("Enter a number of days for rent");
        if (rental_val === "") {
            console.log("Please enter a number of days");
        }
        else if (isNaN(rental_val)) {
            console.log("Please enter a valid number of days");
        }
        else {
            rental_total = Number(rental_val) * 40
            console.log(rental_total)
            return rental_total;
        }
    } while (true);
}

function totalVacationCost() {
    hotel = hotelCost();
    plane = planeRideCost();
    car = rentalCarCost();

    total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane cost: $${plane}`);
    console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();
