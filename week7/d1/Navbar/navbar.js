// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

new_li = document.createElement('li');
text_node = document.createTextNode('Logout');
new_li.appendChild(text_node);

ul = document.querySelector('#socialNetworkNavigation ul'); //!!!
ul.appendChild(new_li);
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last < li > elements from their parent element(<ul>). Display the text of each link. (Hint: use the textContent property).

first_li = ul.firstElementChild;
last_li = ul.lastElementChild;
console.log(first_li.textContent);
console.log(last_li.textContent);
