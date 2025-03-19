
const footstepSound = new Audio('./sounds/wind.wav'); 
footstepSound.volume = 0.5; 

document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const ghostImg = player.querySelector('.ghost'); 
    const container = document.querySelector('.game-container');

    let playerX = 375;
    let playerY = 275;
    let isMoving = false;  
    let facingLeft = false; 

    updatePlayerPosition();

    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    document.addEventListener('keydown', function(e) {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = true;
            e.preventDefault();
        }
    });

    document.addEventListener('keyup', function(e) {
        if (keys.hasOwnProperty(e.key)) {
            keys[e.key] = false;
            e.preventDefault();
        }
    });

    function updatePlayerPosition() {
        player.style.left = `${playerX}px`;
        player.style.top = `${playerY}px`;
    }

    function gameLoop() {
        const speed = 5;
        let moved = false;
        
        // Get container boundaries
        const containerRect = container.getBoundingClientRect();
        const containerScrollHeight = container.scrollHeight;
        const containerScrollWidth = container.scrollWidth;
        
        if (keys.ArrowUp && playerY > 0) {
            playerY -= speed;
            moved = true;
        }
        if (keys.ArrowDown && playerY < containerScrollHeight - player.offsetHeight) {
            playerY += speed;
            moved = true;
        }
        if (keys.ArrowLeft && playerX > 0) {
            playerX -= speed;
            moved = true;
            if (!facingLeft) {
                facingLeft = true;
                updateGhostImage();
            }
        }
        if (keys.ArrowRight && playerX < containerScrollWidth - player.offsetWidth) {
            playerX += speed;
            moved = true;
            if (facingLeft) {
                facingLeft = false;
                updateGhostImage();
            }
        }
    
        // Handle scrolling
        if (moved) {
            const playerVisibleTop = playerY - container.scrollTop;
            const playerVisibleLeft = playerX - container.scrollLeft;
            
            const scrollMargin = 100; 
            
            if (playerVisibleTop < scrollMargin) {
                container.scrollTop = Math.max(0, container.scrollTop - (scrollMargin - playerVisibleTop));
            } else if (playerVisibleTop > containerRect.height - scrollMargin) {
                container.scrollTop += (playerVisibleTop - (containerRect.height - scrollMargin));
            }
            
            if (playerVisibleLeft < scrollMargin) {
                container.scrollLeft = Math.max(0, container.scrollLeft - (scrollMargin - playerVisibleLeft));
            } else if (playerVisibleLeft > containerRect.width - scrollMargin) {
                container.scrollLeft += (playerVisibleLeft - (containerRect.width - scrollMargin));
            }
            
            if (!isMoving) {
                isMoving = true;
                footstepSound.currentTime = 0;
                footstepSound.play();
                setTimeout(() => { isMoving = false; }, 200);
            }
        }
    
        updatePlayerPosition();
        requestAnimationFrame(gameLoop);
    }

    function updateGhostImage() {
        const currentSrc = ghostImg.src;
        let baseName = currentSrc.split('/').pop().replace('.png', ''); 

        if (facingLeft) {
            ghostImg.src = `./img/${baseName}left.png`; 
        } else {
            ghostImg.src = `./img/${baseName.replace('left', '')}.png`; 
        }
    }

    gameLoop();
});



const ghostInfo = document.getElementById('ghost-info');
const ghostText = document.getElementById('ghost-text');

ghostInfo.addEventListener('mouseenter', function() {
   ghostText.style.display === 'block' ? ghostText.style.display = 'none' : ghostText.style.display = 'block';
});

ghostInfo.addEventListener('mouseleave', function() {
    ghostText.style.display = 'none';
});