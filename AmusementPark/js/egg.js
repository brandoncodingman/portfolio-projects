const eggBtn = document.getElementById('egg');
const spaceBtn = document.getElementById('space');


eggBtn.addEventListener('click', () => {
  spaceBtn.style.display = 'block' 
 });

document.addEventListener('click', (event) => {
    if (!eggBtn.contains(event.target) && !spaceBtn.contains(event.target)) {
        spaceBtn.style.display = 'none';
       
    }   
})