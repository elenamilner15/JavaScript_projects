// Exercise 8 : Juice Bar
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        document.getElementById("output").textContent = sentence;
    }

    addIngredients("apple", "orange", "pomegranate");
}

makeJuice("small");

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

document.addEventListener("DOMContentLoaded", function () {
    function makeJuice(size) {
        const ingredients = [];

        function addIngredients(ingredient1, ingredient2, ingredient3) {
            ingredients.push(ingredient1, ingredient2, ingredient3);
        }

        function displayJuice() {
            const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
            document.getElementById("output").textContent = sentence;
        }

        addIngredients("apple", "orange", "pomegranate");
        addIngredients("strawberry", "raspberry", "cranberry");
        displayJuice();
    }

    makeJuice("large");
});
