document.querySelector('.projects__button').addEventListener('click', function () {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__links');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

const projectTiles = document.querySelectorAll('.project-tile');
projectTiles.forEach((tile, index) => {
    if (index >= 3) {
        tile.style.display = 'none';
    }
});

let visibleProjects = 3;

const projectsButton = document.querySelector('.projects__button');
projectsButton.addEventListener('click', () => {
    for (let i = visibleProjects; i < visibleProjects + 3; i++) {
        if (projectTiles[i]) {
            projectTiles[i].style.display = 'block';
        }
    }
    visibleProjects += 3;
    if (visibleProjects >= projectTiles.length) {
        projectsButton.style.display = 'none';
    }
});

// // Zoom effect on hover
// projectTiles.forEach(tile => {
//     tile.addEventListener('mouseenter', () => {
//         tile.querySelector('.projects__images').style.transform = 'scale(1.05)';
//     });

//     tile.addEventListener('mouseleave', () => {
//         tile.querySelector('.projects__images').style.transform = 'scale(1)';
//     });
// });

// Dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = "Toggle Dark Mode";
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#ab5dee';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Switch to Light Mode';
    } else {
        darkModeToggle.textContent = 'Switch to Dark Mode';
    }
});