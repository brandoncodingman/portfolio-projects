// character.js

const character = document.querySelector('.character');
const spaceman = document.querySelector('.spaceman');
const fire = document.querySelector('.fire');

let characterX = window.innerWidth / 2;
let characterY = window.innerHeight / 2;
const moveSpeed = 5;

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false
};

window.addEventListener('keydown', function(e) {
  if (keys.hasOwnProperty(e.code)) {
    keys[e.code] = true;
    e.preventDefault();
  }
});

window.addEventListener('keyup', function(e) {
  if (keys.hasOwnProperty(e.code)) {
    keys[e.code] = false;
  }
});

function updateCharacterPosition() {
  if (keys.KeyW || keys.ArrowUp) {
    fire.style.display = 'block';
    characterY -= moveSpeed;
  } else {
    fire.style.display = 'none';
  }

  if (keys.KeyS || keys.ArrowDown) {
    characterY += moveSpeed;
  }

  if (keys.KeyA || keys.ArrowLeft) {
    characterX -= moveSpeed;
    spaceman.src = './img/Spacemanleft.png';
  }

  if (keys.KeyD || keys.ArrowRight) {
    characterX += moveSpeed;
    spaceman.src = './img/Spacemanright.png';
  }

  fire.src = 'https://media.tenor.com/wcFJHOUD4SEAAAAj/supersayain-ss.gif';

  characterX = Math.max(0, Math.min(window.innerWidth - character.offsetWidth, characterX));
  characterY = Math.max(0, Math.min(window.innerHeight - character.offsetHeight, characterY));

  character.style.left = characterX + 'px';
  character.style.top = characterY + 'px';

  requestAnimationFrame(updateCharacterPosition);
}

window.addEventListener('load', function() {
  characterX = window.innerWidth / 2;
  characterY = window.innerHeight / 2;

  character.style.left = characterX + 'px';
  character.style.top = characterY + 'px';

  requestAnimationFrame(updateCharacterPosition);
});
