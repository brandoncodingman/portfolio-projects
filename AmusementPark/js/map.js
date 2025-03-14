const map = document.getElementById('map1');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

const images = [
    "./img/zombie-map1.jpg",
    "./img/zombie-map2.jpg",
    "./img/zombie-map3.jpg",
    "./img/zombie-map4.jpg"
];

let currentIndex = 0;
let isAnimating = false; 

function updateImage() {
    map.src = images[currentIndex];
}

function zoomAndChangeImage(zoomClass, nextIndex) {
    if (isAnimating) return;
    isAnimating = true;

    map.classList.add(zoomClass);

    setTimeout(() => {
        map.classList.remove(zoomClass);
        currentIndex = nextIndex;
        updateImage();

      
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }, 500); 
}

zoomInBtn.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
        zoomAndChangeImage("zoom-in", currentIndex + 1);
    }
});

zoomOutBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        zoomAndChangeImage("zoom-out", currentIndex - 1);
    }
});
