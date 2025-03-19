const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let gameSpeed = 3;
let gameFrame = 0;

const bgLayer1 = new Image();
bgLayer1.src = './img/layer-1.png';
const bgLayer2 = new Image();
bgLayer2.src = './img/layer-2.png';
const bgLayer3 = new Image();
bgLayer3.src = './img/layer-3.png';
const bgLayer4 = new Image();
bgLayer4.src = './img/layer-4.png';
const bgLayer5 = new Image();
bgLayer5.src = './img/layer-5.png';

const speedSlider = document.getElementById('speedSlider');
const showGameSpeed = document.getElementById('showGameSpeed');

// Set first value
speedSlider.value = gameSpeed;
showGameSpeed.innerHTML = "Normal";

speedSlider.addEventListener('input', function (e) {
    gameSpeed = e.target.value;
    
    if (gameSpeed <= 6) {
        showGameSpeed.innerHTML = "Slow";
    } else if (gameSpeed <= 13) {
        showGameSpeed.innerHTML = "Normal";
    } else {
        showGameSpeed.innerHTML = "Fast";
    }
});

const blockImages = [
    new Image(),
    new Image(),
    new Image()
];

blockImages[0].src = './img/kirby.png'; 
blockImages[1].src = './img/kirby.png'; 
blockImages[2].src = './img/kirby.png'; 

let imagesLoaded = 0;
blockImages.forEach(image => {
    image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === blockImages.length) {
            initializeBlocks();
            animate();
        }
    };
});

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400; 
        this.height = canvas.height;  
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update() {
        this.speed = gameSpeed * this.speedModifier;
        this.x = gameFrame * this.speed % this.width;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

    getVisibleArea() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }
}

const layer1 = new Layer(bgLayer1, 0.2);
const layer2 = new Layer(bgLayer2, 0.4);
const layer3 = new Layer(bgLayer3, 0.6);
const layer4 = new Layer(bgLayer4, 0.8);
const layer5 = new Layer(bgLayer5, 1);

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

class Block {
    constructor(layer, images) {
        const visibleArea = layer.getVisibleArea();
        this.x = Math.random() * visibleArea.width + visibleArea.x;
        this.y = Math.random() * visibleArea.height + visibleArea.y;
        this.width = 105;
        this.height = 105;

        // Randomly choose an image to be placed inside the block
        this.image = images[Math.floor(Math.random() * images.length)];
    }

    draw() {
        // Draw the image to replace the block
        if (this.image) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    update(layer) {
        const visibleArea = layer.getVisibleArea();
        this.x -= gameSpeed * layer.speedModifier;
        if (this.x + this.width < visibleArea.x) {
            const newVisibleArea = layer.getVisibleArea();
            this.x = newVisibleArea.x + newVisibleArea.width;
            this.y = Math.random() * newVisibleArea.height + newVisibleArea.y;
        }
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let blocks = [];

function initializeBlocks() {
    gameObjects.forEach(layer => {
        const block = new Block(layer, blockImages); 
        blocks.push(block);  // Add blocks to the array
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });

    blocks.forEach(block => {
        block.update(layer1);
        block.draw();
    });

    gameFrame--;
    requestAnimationFrame(animate);
}

window.addEventListener('load', function () {
    setTimeout(function () {
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.style.display = 'none';
    }, 2000);  
});
