// 2.1. Retrieve the div and console.log it

container = document.getElementById('container');
console.log(container);

// 2.2. Change the name “Pete” to “Richard”.

change_name = document.querySelector('.list li:last-child');
change_name.textContent = 'Richard'
console.log(change_name);

// 2.3. Delete the second <li> of the second <ul>
second_list = document.querySelectorAll('.list')[1];
delete_name = second_list.querySelector('li:nth-child(2)');
second_list.removeChild(delete_name);
console.log(second_list);

// 2.4. Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
lists = document.querySelectorAll('.list')
lists.forEach(ul => {
    change_name = ul.querySelector('li:first-child');
    change_name.textContent = 'Elena'
});
//3. Using Javascript:
// 3.1. Add a class called student_list to both of the <ul>'s.
// 3.2. Add the classes university and attendance to the first <ul>.
lists = document.querySelectorAll('.list')
lists.forEach(ul => {
    ul.classList.add('student_list');
});
lists[0].classList.add('university', 'attendance');

// 4. Using Javascript:
// 4. 1. Add a “light blue” background color and some padding to the <div>.
container = document.getElementById('container');
container.style.backgroundColor = 'lightblue';
container.style.padding = '20px';
// 4. 2. Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
second_list = document.querySelectorAll('.list')[1];
invisible_name = second_list.querySelector('li:nth-child(2)');
invisible_name.style.display = 'none';

// 4.3. Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
list = document.querySelector('.list');
border_name = list.querySelector('li:nth-child(2)');
border_name.style.border = '2px solid violet';


// 4.4. Change the font size of the whole body
document.body.style.fontSize = '24px';