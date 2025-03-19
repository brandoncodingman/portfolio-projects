document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;

    // Initialize slider
    function initSlider() {
        // Set first slide as active
        updateSlider();
        // Start auto sliding
        startSlideTimer();
        // Set up event listeners
        setupEventListeners();
    }

    // Update display
    function updateSlider() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
        resetSlideTimer();
    }

    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    function setupEventListeners() {
        // Previous button click
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetSlideTimer();
        });

        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetSlideTimer();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                goToSlide(index);
            });
        });

        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });

        sliderContainer.addEventListener('mouseleave', function() {
            startSlideTimer();
        });

     
    }

    initSlider();
});