//board
let board;
let boardWidth = 360;
let boardHeight = 640; //if switching bg change or use these dimensions
let context;

//submarine
let subWidth = 34; //width/height ratio = 408/228 = 17/12 ratio of sub image used
let subHeight = 24;
let subX = boardWidth/8;
let subY = boardHeight/2;
let subImg;

let sub = {
    x : subX,
    y : subY,
    width : subWidth,
    height : subHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64; //width/height ratio = 384/3072 = 1/8
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipes moving left speed
let velocityY = 0; //sub speed
let gravity = 0.4;

let gameOver = false;
let score = 0;

// sounds and music
let moveSound = new Audio('./sounds/move.mp3');
let hitSound = new Audio('./sounds/hit.mp3');
let bgm = new Audio('./sounds/bgm.mp3');
bgm.loop = true;
let point = new Audio('./sounds/point.mp3');

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //draw on board


    //load images
    subImg = new Image();
    subImg.src = "./img/submarine.gif";
    subImg.onload = function() {
        context.drawImage(subImg, sub.x, sub.y, sub.width, sub.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "./img/toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./img/bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500); 
    document.addEventListener("keydown", moveSub);
    
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //sub
    velocityY += gravity;
    sub.y = Math.max(sub.y + velocityY, 0); //apply gravity to current sub.y, limit the sub.y to top of the canvas
    context.drawImage(subImg, sub.x, sub.y, sub.width, sub.height);

    if (sub.y > board.height) {
        gameOver = true;
    }

    //pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && sub.x > pipe.x + pipe.width) {
            score += 0.5; //score 0.5*2 = 1, 1 for each set of pipes
            pipe.passed = true;
            point.play();
        }

        if (detectCollision(sub, pipe)) {
            hitSound.play();
            gameOver = true;
        }
    }

    //clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); 
    }

    //score
    context.fillStyle = "white";
    context.font="45px sans-serif";
    context.fillText(score, 5, 45);

    if (gameOver) {
        context.fillText("GAME OVER", 5, 90);
        bgm.pause();
    }
}

function placePipes() {
    if (gameOver) {
        return;
    }

    //(0-1) * pipeHeight/2.
    // 0 -> -128 (pipeHeight/4)
    // 1 -> -128 - 256 (pipeHeight/4 - pipeHeight/2) = -3/4 pipeHeight
    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let topPipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(topPipe);

    let bottomPipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipeArray.push(bottomPipe);
}

function moveSub(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        if(bgm.paused){
        bgm.play();
        bgm.currentTime = 0; //pause and replay at current time if death
    }
        moveSound.play();
       
        //move
        velocityY = -6;

        //reset game
        if (gameOver) {
            sub.y = subY;
            pipeArray = [];
            score = 0;
            gameOver = false;
        }
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}
