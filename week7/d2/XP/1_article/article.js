// Using a DOM property, retrieve the h1 and console.log it.
h1 = document.querySelector('h1');
console.log(h1);
// Using DOM methods, remove the last paragraph in the <article> tag.
article = document.querySelector('article');
par = article.querySelectorAll('p');
num = par.length;
delete_par = par[num - 1]
article.removeChild(delete_par);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

h2 = document.querySelector('h2');
h2.addEventListener('click', function () {
    h2.style.backgroundColor = 'red';
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
h3 = document.querySelector('h3');
h3.addEventListener('click', function () {
    h3.style.display = 'none';
});
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
button = document.querySelector('button');
button.addEventListener('click', function () {
    par.forEach(par => {
        par.style.fontWeight = 'bold';
    })
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.addEventListener('mouseover', function () {
    const randomSize = Math.floor(Math.random() * 101);
    //random pixel size 
    h1.style.fontSize = `${randomSize}px`;
});
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
par2 = par[1];
par2.addEventListener('mouseover', function () {
    //fade css animation
    par2.classList.add('fade-out-text');
});