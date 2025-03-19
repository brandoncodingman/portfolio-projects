const music = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicToggleButton.textContent = "Music Off"; 
    } else {
        music.pause();
        musicToggleButton.textContent = "Music On"; 
    }
}

window.onload = function () {
    music.play();
    musicToggleButton.textContent = "Music Off"; // Initial button text is "Music Off"
};

musicToggleButton.addEventListener('click', toggleMusic);
