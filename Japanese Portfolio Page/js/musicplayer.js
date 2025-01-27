const music = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle');

// Function to toggle music play/pause
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggleButton.textContent = "Music Off"; // Change button text to "Music Off"
    } else {
        music.pause();
        musicToggleButton.textContent = "Music On"; // Change button text to "Music On"
    }
}

// Optionally, ensure music starts playing when the page loads
window.onload = function () {
    music.play();
    musicToggleButton.textContent = "Music Off"; // Initial button text is "Music Off"
};

// Add event listener to toggle music when the button is clicked
musicToggleButton.addEventListener('click', toggleMusic);
