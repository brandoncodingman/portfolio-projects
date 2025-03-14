function playSound() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/door-creak.mp3');
    audio.play();
}

function openDoors() {
    const leftDoor = document.querySelector('.left-door');
    const rightDoor = document.querySelector('.right-door');
    const wheel = document.querySelector('.wheel');
    const arrow = document.querySelector('#arrow');
    const loader = document.querySelector('.loader');
    
    playSound();
    wheel.style.transform = 'translate(-50%, -50%) rotate(720deg)';
   

    setTimeout(() => {
        leftDoor.classList.add('open');
        rightDoor.classList.add('open');
        wheel.style.display = 'none';
        arrow.style.display = 'none';
    }, 500);

    setTimeout(() => {
        loader.style.display = 'none';
    }, 2500);
}