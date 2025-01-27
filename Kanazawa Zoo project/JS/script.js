// JavaScript to make image move randomly on click
function moveImage() {
  var image = document.getElementById('movingImage');
  var x = Math.random() * (window.innerWidth - 100);  // Random horizontal position
  var y = Math.random() * (window.innerHeight - 100);  // Random vertical position
  image.style.left = x + 'px';
  image.style.top = y + 'px';
}

// Call the moveImage function every 200ms
setInterval(moveImage, 200);
