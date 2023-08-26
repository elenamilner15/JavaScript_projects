const form = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (noun && adjective && person && verb && place) {
        const story = `At the ${place}, I saw how ${person} tried to convince a ${adjective} ${noun} to ${verb}.`;
        storySpan.textContent = story;
    } else {
        storySpan.textContent = "Fill all the fields.";
    }
});

shuffleButton.addEventListener("click", function () {
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    if (noun && adjective && person && verb && place) {
        const storyTemplates = [
            `Once upon a time in a far away ${place}, a strange ${noun} wrote a beautiful and ${adjective} poem titled "How to ${verb}" and dedicated it to ${person}.`,
            `Everybody, including the crazy ${person}, wants to meet a ${adjective} ${noun} that is capable of ${verb} and bring it to the ${place}.`,
            `To make everyone laugh, a ${adjective} clown invited ${person} from the ${place} to the stage and made them ${verb}. Then, the clown pulled a ${noun} out of their sleeve and disappeared.`
        ];


        const randomIndex = Math.floor(Math.random() * storyTemplates.length);
        storySpan.textContent = storyTemplates[randomIndex];
        // Delay of 10 millisec. Why it is not working without debugger or delay?
        //debugger
        setTimeout(function () {
            storySpan.textContent = storyTemplates[randomIndex];
        }, 10);
    } else {
        storySpan.textContent = "Fill all the fields.";
    }
});

