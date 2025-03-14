document.querySelectorAll('.attraction-container').forEach(container => {
    let leftCurtain = container.querySelector('.left-curtain');
    let rightCurtain = container.querySelector('.right-curtain');

    container.addEventListener('mouseenter', () => {
        gsap.to(leftCurtain, { x: '-100%', duration: 1.5, ease: "power2.out" }); // Faster opening
        gsap.to(rightCurtain, { x: '100%', duration: 1.5, ease: "power2.out" });
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(leftCurtain, { x: '0%', duration: 1.2, ease: "power2.in" }); // Slower closing
        gsap.to(rightCurtain, { x: '0%', duration: 1.2, ease: "power2.in" });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const attractionContainers = document.querySelectorAll(".attraction-container");

    attractionContainers.forEach(container => {
        const slides = container.querySelectorAll(".slides");
        const leftArrow = container.querySelector(".left-arrow");
        const rightArrow = container.querySelector(".right-arrow");

        let currentIndex = 0; // Track current slide index

        function updateSlide() {
            // Hide all slides
            slides.forEach(slide => slide.style.display = "none");
            // Show current slide
            slides[currentIndex].style.display = "block";
        }

        updateSlide();

        leftArrow.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back
            updateSlide();
        });

        rightArrow.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % slides.length; // Loop forward
            updateSlide();
        });
    });
});


