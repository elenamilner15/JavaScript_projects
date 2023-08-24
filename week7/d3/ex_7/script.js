// Exercise 7 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function () {
    const userName = "John";
    const userImageUrl = "John.jpg";

    const navbar = document.getElementById("navbar");

    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    const userImage = document.createElement("img");
    userImage.src = userImageUrl;
    userImage.alt = `${userName}'s Profile Picture`;

    const userNameElement = document.createElement("span");
    userNameElement.textContent = `Welcome, ${userName}!`;

    userDiv.appendChild(userImage);
    userDiv.appendChild(userNameElement);

    navbar.appendChild(userDiv);
})();


