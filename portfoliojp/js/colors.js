// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get the header and body elements
const header = document.querySelector('.header-wrapper');
const body = document.querySelector('body');

// Function to change the color of all elements randomly
function changeColorsRandomly() {
    // Get all elements inside the body
    const elements = body.querySelectorAll('*');

    elements.forEach((element) => {
        // Apply a random color to each element
        element.style.color = getRandomColor();
        // Optionally, change background color as well (you can adjust which elements to target)
        element.style.backgroundColor = getRandomColor();
    });
}

// Reset the colors when the hover is removed
function resetColors() {
    const elements = body.querySelectorAll('*');
    elements.forEach((element) => {
        element.style.color = ''; // Reset text color to default
        element.style.backgroundColor = ''; // Reset background color to default
    });
}

// Add event listeners to the header for hover effect
header.addEventListener('click', changeColorsRandomly);
header.addEventListener('mouseleave', resetColors);

