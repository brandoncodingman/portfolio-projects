document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const navHeader = document.querySelector(".nav-header");

    hamburger.addEventListener("click", () => {
        navHeader.classList.toggle("active");
    });
});
