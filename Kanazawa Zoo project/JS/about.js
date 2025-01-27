// Apply tilt effect based on mouse position relative to the element's center
function tilt(event) {
    const tiltBox = event.currentTarget;
    const rect = tiltBox.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    // Calculate tilt angle based on mouse position
    const tiltStrength = 25;  // Adjust this value for stronger/weaker tilt
    const tiltX = (deltaY / rect.height) * tiltStrength;
    const tiltY = -(deltaX / rect.width) * tiltStrength;

    // Apply the tilt transform on the element (the card itself)
    tiltBox.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

    // Hide the white background behind the card during tilt
    const background = tiltBox.closest('.card'); // Get the closest .card container that has the background
    if (background) {
        background.style.background = 'transparent';
    }
}

// Reset the tilt and restore the white background when mouse leaves
function resetTilt(event) {
    const tiltBox = event.currentTarget;
    tiltBox.style.transform = 'rotateX(0deg) rotateY(0deg)';

    // Restore the white background
    const background = tiltBox.closest('.card');
    if (background) {
        background.style.background = 'white';  // Or whatever your default background color is
    }
}

// Attach event listeners to each .tilt-box element
document.querySelectorAll('.tilt-box').forEach(item => {
    item.addEventListener('mousemove', tilt);
    item.addEventListener('mouseleave', resetTilt);
});
