const dataForm = document.getElementById("dataForm");
const jsonDataElement = document.getElementById("jsonData");

dataForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");

    const data = {
        name: nameInput.value,
        lastName: lastNameInput.value
    };

    const jsonData = JSON.stringify(data, null, 2); // Convert data to JSON string with indentation
    jsonDataElement.textContent = jsonData;
});


