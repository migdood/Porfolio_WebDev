// Get references to the button and heading elements
const button = document.getElementById('hero-buttonid');
const heading = document.getElementById('hero-subtextid');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Change the text of the heading
    heading.textContent = 'Text Changed!';
});