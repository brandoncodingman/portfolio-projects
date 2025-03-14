// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    // Initialize the slider
    function initSlider() {
        // Set first slide as active
        updateSlider();
        // Start auto sliding
        startSlideTimer();
        // Set up event listeners
        setupEventListeners();
    }

    // Update slider display
    function updateSlider() {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    // Move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Move to a specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetSlideTimer();
    }

    // Start auto slide timer
    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Reset slide timer
    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Previous button click
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetSlideTimer();
        });

        // Next button click
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetSlideTimer();
        });

        // Dot navigation click
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                goToSlide(index);
            });
        });

        // Pause slideshow on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });

        // Resume slideshow when mouse leaves
        sliderContainer.addEventListener('mouseleave', function() {
            startSlideTimer();
        });

     
    }

    // Initialize the slider
    initSlider();
});