
// Retrieve the form and console.log it
form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them
fnameId = document.getElementById('fname');
lnameId = document.getElementById('lname');
console.log(fnameId);
console.log(lnameId);

// Retrieve the inputs by their name attribute and console.log them
fnameName = document.getElementsByName('firstname')[0];//without 0 - Node
lnameName = document.getElementsByName('lastname')[0];
console.log(fnameName);
console.log(lnameName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent from default submission

    fnameValue = fnameId.value;
    lnameValue = lnameId.value;

    if (fnameValue !== '' && lnameValue !== '') {

        fnameLi = document.createElement('li');
        lnameLi = document.createElement('li');

        fnameLi.textContent = fnameValue;
        lnameLi.textContent = lnameValue;

        answerList = document.querySelector('.usersAnswer');
        answerList.appendChild(fnameLi);
        // console.log('fname', fnameLi);
        answerList.appendChild(lnameLi);
        // console.log('lname', lnameLi);
    }
});
