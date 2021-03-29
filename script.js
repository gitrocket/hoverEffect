const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#349db', '#e67e22', '#2ecc71'];

const SQUARES = 1000;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square);
}

function setColor(element) {
    element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
}

