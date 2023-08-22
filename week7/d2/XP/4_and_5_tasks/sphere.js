form = document.getElementById('MyForm');
radiusInput = document.getElementById('radius');
volumeInput = document.getElementById('volume');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    radius = parseFloat(radiusInput.value);
    if (!isNaN(radius)) {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        console.log('volume', volume)
        volumeInput.value = volume.toFixed(2); // format 2 decimal
    } else {
        volume.value = 'Invalid radius';
        console.log('Invalid radius');
        volumeInput.value = "Invalid radius"
    }
});

button = document.getElementById('submit');

button.addEventListener('click', function () {
    this.style.backgroundColor = 'turquoise';
    this.style.fontSize = '20px';
});

button.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'beige';
});

button.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'red';
});

button.addEventListener('dblclick', function () {
    this.value = 'Double Clicked!';
    this.style.backgroundColor = 'violet';
});