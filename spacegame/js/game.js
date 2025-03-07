let score = 0;
let gameOver = false;

// Random block generation
function createRandomBlock() {
  const block = document.createElement('div');
  block.classList.add('random-block');
  
  const randomColor = getRandomColor();
  block.style.backgroundColor = randomColor;
  
  const startPositionY = Math.random() * (window.innerHeight - 50); 
  block.style.top = startPositionY + 'px';
  block.style.padding = "0px";
  block.style.margin = "0px";
  
  document.body.appendChild(block);
  
  setTimeout(() => {
    block.remove();
  }, 5000); // blocks remove cycle
  
  return block;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Update the score
function updateScore() {
  score++;
  document.getElementById('score').textContent = score;
}

// Game over function
function gameOverScreen() {
  const gameOverElement = document.querySelector('.game-over');
  gameOverElement.style.display = 'block';
  gameOverElement.querySelector('span').textContent = score;
  gameOver = true;
}

// Check collision
function checkCollision(spaceman, block) {
  const spacemanRect = spaceman.getBoundingClientRect();
  const blockRect = block.getBoundingClientRect();

  return (
    spacemanRect.left < blockRect.right &&
    spacemanRect.right > blockRect.left &&
    spacemanRect.top < blockRect.bottom &&
    spacemanRect.bottom > blockRect.top
  );
}

// Restart the game
function resetGame() {
  document.querySelector('.game-over').style.display = 'none';
  score = 0;
  document.getElementById('score').textContent = score;
  gameOver = false;
  startGame();
}

// Main game loop
function startGame() {
  let lastBlockTime = 0;
  const spaceman = document.querySelector('.spaceman');
  
  function gameLoop(timestamp) {
    if (gameOver) return; 

    if (timestamp - lastBlockTime > 1000) {
      createRandomBlock(); 
      lastBlockTime = timestamp;
      updateScore();
    }

    // Collisions with random blocks
    const blocks = document.querySelectorAll('.random-block');
    blocks.forEach(block => {
      if (checkCollision(spaceman, block)) {
        gameOverScreen();
      }
    });

    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
}

// Start the game
window.addEventListener('load', function() {
  startGame();
});
