const button = document.querySelector('.hero-button');
const heading = document.querySelector('.hero-subtext');

function changeHeader(){
    heading.textContent = 'nigga you dont deserve shit';
}

button.addEventListener('click', changeHeader);