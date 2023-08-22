// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)


// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).

// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

booklistSection = document.querySelector('.listBooks');
allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        image: "hp.jpg",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "gg.jpg",
        alreadyRead: false
    }
];

allBooks.forEach(book => {
    bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    titleParagraph = document.createElement('p');
    titleParagraph.textContent = `${book.title} written by ${book.author}`;
    bookDiv.appendChild(titleParagraph);

    const image = document.createElement('img');
    image.src = book.image;
    image.style.width = '100px';
    bookDiv.appendChild(image);

    if (book.alreadyRead) {
        bookDiv.style.color = 'red';
    }

    booklistSection.appendChild(bookDiv);
});