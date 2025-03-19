// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const header = document.querySelector('.header-wrapper');
const body = document.querySelector('body');

function changeColorsRandomly() {
    const elements = body.querySelectorAll('*');

    elements.forEach((element) => {
        element.style.color = getRandomColor();
        element.style.backgroundColor = getRandomColor();
    });
}

// Reset the colors 
function resetColors() {
    const elements = body.querySelectorAll('*');
    elements.forEach((element) => {
        element.style.color = ''; 
        element.style.backgroundColor = ''; 
    });
}

header.addEventListener('click', changeColorsRandomly);
header.addEventListener('mouseleave', resetColors);

