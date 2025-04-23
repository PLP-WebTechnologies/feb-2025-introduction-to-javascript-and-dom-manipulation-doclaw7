// script.js

// Change Text Content Dynamically
const textElement = document.getElementById('dynamicText');
const changeTextButton = document.getElementById('changeTextButton');

changeTextButton.addEventListener('click', () => {
    textElement.textContent = 'The text has been updated dynamically using JavaScript!';
});

// Modify CSS Styles via JavaScript
const changeStyleButton = document.getElementById('changeStyleButton');

changeStyleButton.addEventListener('click', () => {
    textElement.style.color = 'green';
    textElement.style.fontSize = '1.5em';
    textElement.style.fontWeight = 'bold';
});

// Add an Element When a Button is Clicked
const addElementButton = document.getElementById('addElementButton');
const container = document.getElementById('container');
let newElementCounter = 1;

addElementButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `New paragraph added! (${newElementCounter})`;
    newParagraph.id = `newParagraph-${newElementCounter}`;
    container.appendChild(newParagraph);
    newElementCounter++;
});

// Remove an Element When a Button is Clicked
const removeElementButton = document.getElementById('removeElementButton');

removeElementButton.addEventListener('click', () => {
    const lastParagraph = container.lastElementChild;
    if (lastParagraph) {
        container.removeChild(lastParagraph);
    } else {
        alert('No more elements to remove!');
    }
});