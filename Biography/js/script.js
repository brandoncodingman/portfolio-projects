let backgroundContainer = document.getElementById("background-container");
let character = document.getElementById("character");
let cherryBlossoms = document.getElementById("cherryblossoms");

let moveSpeed = 250; // Adjust the speed of the background movement
let backgroundPositionX = 0; // Track the current background position

let isCheckingVisibility = false; // Flag to check if visibility check is pending
let isThrottled = false; // Flag to throttle the movement rate

// Function to update visibility using requestAnimationFrame
function updateVisibility() {
    if (!isCheckingVisibility) {
        isCheckingVisibility = true;
        requestAnimationFrame(function () {
            checkVisibility();
            isCheckingVisibility = false;
        });
    }
}

// Function to throttle movement to limit the rate at which background moves
function throttleMovement() {
    if (isThrottled) return;
    isThrottled = true;
    setTimeout(function () {
        isThrottled = false;
    }, 100); // Throttle the movement to occur every 100ms
}

// Function to toggle visibility of elements based on background position
function checkVisibility() {
    // Example 1: Make text and image appear after 1000px and disappear after 1600px
    if (Math.abs(backgroundPositionX) >= 300 && Math.abs(backgroundPositionX) <= 2500) {
        document.getElementById("placeholder-text").style.opacity = 1;
        document.getElementById("placeholder-image").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text").style.opacity = 0;
        document.getElementById("placeholder-image").style.opacity = 0;
    }

    // Example 2: Make text and image appear after 1600px and disappear after 2200px
    if (Math.abs(backgroundPositionX) >= 4500 && Math.abs(backgroundPositionX) <= 6500) {
        document.getElementById("placeholder-text-2").style.opacity = 1;
        document.getElementById("placeholder-image-2").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-2").style.opacity = 0;
        document.getElementById("placeholder-image-2").style.opacity = 0;
    }

    // Example 3: Make text and image appear after 2200px and disappear after 2800px
    if (Math.abs(backgroundPositionX) >= 8500 && Math.abs(backgroundPositionX) <= 10500) {
        document.getElementById("placeholder-text-3").style.opacity = 1;
        document.getElementById("placeholder-image-3").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-3").style.opacity = 0;
        document.getElementById("placeholder-image-3").style.opacity = 0;
    }

    // Example 4: Make text and image appear after 2800px and disappear after 3400px
    if (Math.abs(backgroundPositionX) >= 12500 && Math.abs(backgroundPositionX) <= 14500) {
        document.getElementById("placeholder-text-4").style.opacity = 1;
        document.getElementById("placeholder-image-4").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-4").style.opacity = 0;
        document.getElementById("placeholder-image-4").style.opacity = 0;
    }

    // Example 5: Make text and image appear after 3400px and disappear after 4000px
    if (Math.abs(backgroundPositionX) >= 16500 && Math.abs(backgroundPositionX) <= 18500) {
        document.getElementById("placeholder-text-5").style.opacity = 1;
        document.getElementById("placeholder-image-5").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-5").style.opacity = 0;
        document.getElementById("placeholder-image-5").style.opacity = 0;
    }

    // Example 6: Make text and image appear after 4000px and disappear after 4600px
    if (Math.abs(backgroundPositionX) >= 20500 && Math.abs(backgroundPositionX) <= 22500) {
        document.getElementById("placeholder-text-6").style.opacity = 1;
        document.getElementById("placeholder-image-6").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-6").style.opacity = 0;
        document.getElementById("placeholder-image-6").style.opacity = 0;
    }

    // Example 7: Make text and image appear after 4600px and disappear after 5200px
    if (Math.abs(backgroundPositionX) >= 24500 && Math.abs(backgroundPositionX) <= 26500) {
        document.getElementById("placeholder-text-7").style.opacity = 1;
        document.getElementById("placeholder-image-7").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-7").style.opacity = 0;
        document.getElementById("placeholder-image-7").style.opacity = 0;
    }

    // Example 8: Make text and image appear after 5200px and disappear after 5800px
    if (Math.abs(backgroundPositionX) >= 28500 && Math.abs(backgroundPositionX) <= 30500) {
        document.getElementById("placeholder-text-8").style.opacity = 1;
        document.getElementById("placeholder-image-8").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-8").style.opacity = 0;
        document.getElementById("placeholder-image-8").style.opacity = 0;
    }

    // Example 9: Make text and image appear after 5800px and disappear after 6400px
    if (Math.abs(backgroundPositionX) >= 32500 && Math.abs(backgroundPositionX) <= 34500) {
        document.getElementById("placeholder-text-9").style.opacity = 1;
        document.getElementById("placeholder-image-9").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-9").style.opacity = 0;
        document.getElementById("placeholder-image-9").style.opacity = 0;
    }

    // Example 10: Make text and image appear after 6400px and disappear after 7000px
    if (Math.abs(backgroundPositionX) >= 36500 && Math.abs(backgroundPositionX) <= 38500) {
        document.getElementById("placeholder-text-10").style.opacity = 1;
        document.getElementById("placeholder-image-10").style.opacity = 1;
    } else {
        document.getElementById("placeholder-text-10").style.opacity = 0;
        document.getElementById("placeholder-image-10").style.opacity = 0;
    }

    if (Math.abs(backgroundPositionX) >= 39000) {
        document.getElementById("placeholder-text-11").style.opacity = 1;
        document.getElementById("placeholder-image-11").style.opacity = 1;
        document.getElementById('profile-warp').style.display = 'block';
    } else {
        document.getElementById("placeholder-text-11").style.opacity = 0;
        document.getElementById("placeholder-image-11").style.opacity = 0;
        document.getElementById('profile-warp').style.display = 'none';
    }
}


// Event listener for keydown events (Arrow keys and A/D keys)
document.addEventListener("keydown", function (event) {
    // Move background when pressing arrow keys or A/D keys
    if (event.key === "ArrowLeft" || event.key === "a") {
        // Move background to the right
        backgroundPositionX += moveSpeed;
        backgroundContainer.style.backgroundPositionX = backgroundPositionX + "px";

        // Reflect the character to the right
        character.style.transform = "translate(-50%, -50%) scaleX(1)";
    }
    if (event.key === "ArrowRight" || event.key === "d") {
        // Move background to the left
        backgroundPositionX -= moveSpeed;
        backgroundContainer.style.backgroundPositionX = backgroundPositionX + "px";

        // Reflect the character to the left (mirrored)
        character.style.transform = "translate(-50%, -50%) scaleX(-1)";
    }

    // Throttle movement
    throttleMovement();

    // Update visibility after each movement
    updateVisibility();
});


// music and language toggle
let isMusicPlaying = false;
let isEnglish = true;

const translations = {
    en: {
        "Welcome to Brandon's Biography! The life of an underdog who doesn't know how to give up.": "Welcome to Brandon's Biography! The life of an underdog who doesn't know how to give up.",
        "I have an awesome supportive family!": "I have an awesome supportive family!",
        "I graduated in 2007 with a Bachelor's degree in Science and Kinesiology.": "I graduated in 2007 with a Bachelor's degree in Science and Kinesiology.",
        "I moved to the land of snow and camo and became a nurse.": "I moved to the land of snow and camo and became a nurse.",
        "In 2017 I got my Masters degree in Athletic Training.": "In 2017 I got my Masters degree in Athletic Training.",
        "I presented my Masters thesis paper in Chiba, Japan": "I presented my Masters thesis paper in Chiba, Japan",
        "I met my wife in 2019 and we got married in 2022.": "I met my wife in 2019 and we got married in 2022.",
        "I became a father in 2023.": "I became a father in 2023.",
        "My father passed away shortly after...": "My father passed away shortly after...",
        "Skills": "<strong id=\"strong\">Skills</strong><br><br>HTML &#x2B50; &#x2B50; &#x2B50; &#x2B50;<br>CSS &#x2B50; &#x2B50; &#x2B50;<br>JavaScript &#x2B50; &#x2B50; &#x2B50;<br>PHP &#x2B50; &#x2B50; &#x2B50;<br>Bootstrap &#x2B50; &#x2B50; &#x2B50;<br>MySQL &#x2B50;<br>JQuery &#x2B50;<br>AJAX &#x2B50;",
    },
    ja: {
        "Welcome to Brandon's Biography! The life of an underdog who doesn't know how to give up.": "ブランドンの伝記へようこそ！諦めることを知らないアンダードッグの人生。",
        "I have an awesome supportive family!": "素晴らしいサポートをしてくれる家族がいます！",
        "I graduated in 2007 with a Bachelor's degree in Science and Kinesiology.": "2007年に科学とキネシオロジーの学士号を取得しました。",
        "I moved to the land of snow and camo and became a nurse.": "雪と迷彩の国に移住し、看護師になりました。",
        "In 2017 I got my Masters degree in Athletic Training.": "2017年にアスレティックトレーニングの修士号を取得しました。",
        "I presented my Masters thesis paper in Chiba, Japan": "日本の千葉で修士論文を発表しました。",
        "I met my wife in 2019 and we got married in 2022.": "2019年に妻と出会い、2022年に結婚しました。",
        "I became a father in 2023.": "2023年に父親になりました。",
        "My father passed away shortly after...": "父はその後すぐに亡くなりました...",
        "Skills": "<strong id=\"strong\">スキル</strong><br><br>HTML &#x2B50; &#x2B50; &#x2B50; &#x2B50;<br>CSS &#x2B50; &#x2B50; &#x2B50;<br>JavaScript &#x2B50; &#x2B50; &#x2B50;<br>PHP &#x2B50; &#x2B50; &#x2B50;<br>Bootstrap &#x2B50; &#x2B50; &#x2B50;<br>MySQL &#x2B50;<br>JQuery &#x2B50;<br>AJAX &#x2B50;",
    }
};


// Toggle Language
document.getElementById('language-toggle-button').addEventListener('click', function () {
    isEnglish = !isEnglish;
    toggleLanguage();
    this.classList.toggle('toggled');
});

// Toggle Music
function toggleMusic() {
    const music = document.getElementById('background-music');
    const musicButton = document.querySelector('#music-toggle button');

    if (isMusicPlaying) {
        music.pause();
        musicButton.innerText = "Toggle Music On";  // Change the text
        musicButton.classList.remove('toggled');  // Remove any special styling when music is off
    } else {
        music.play();
        musicButton.innerText = "Toggle Music Off";  // Change the text
        musicButton.classList.add('toggled');  // Add special styling when music is on
    }

    isMusicPlaying = !isMusicPlaying;
}


// Update all text content based on language
function toggleLanguage() {
    const texts = document.querySelectorAll('.placeholder');
    texts.forEach((text) => {
        if (!text.hasAttribute('data-original')) {
            // If it's the first time toggling, store the original English text
            text.setAttribute('data-original', text.innerText);
        }

        const originalText = text.getAttribute('data-original');
        const translatedText = isEnglish ? translations.en[originalText] : translations.ja[originalText];

        // Update the text based on the selected language
        text.innerText = translatedText;
    });

    // Change the language toggle button text
    const button = document.getElementById('language-toggle-button');
    button.innerText = isEnglish ? '日本語' : 'English';
}


// loading screen gif image function

window.onload = function() {
    // After 3 seconds, add the class to trigger the transition
    setTimeout(function() {
      document.body.classList.add('loading'); // Add class to start transition (fade out)
      document.getElementById('background-container').style.display = 'block'; // Show the content
    }, 3000); // 3 seconds delay
  };
  