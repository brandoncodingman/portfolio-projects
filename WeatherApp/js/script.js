const apiKey = '0cf4c9b55dfc803690986c8add1d0099'; // Replace with your OpenWeather API key
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const temperatureElem = document.getElementById('temperature');
const descriptionElem = document.getElementById('description');
const suggestionElem = document.getElementById('suggestion');
const getWeatherBtn = document.getElementById('get-weather');
const img = document.getElementById('img');

function getWeather() {
    const city = cityInput.value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert("City not found. Please try again.");
                return;
            }

            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;
            const windSpeed = data.wind.speed;

            temperatureElem.textContent = `Temperature: ${temp}°C`;
            descriptionElem.textContent = `Description: ${description}`;

            let suggestion = '';

            // Suggestion based on weather description
            if (description.includes('clear') || description.includes('sunny')) {
                suggestion = "It's sunny today, maybe you should go for a walk!";
                img.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3pxNTgwZTBscXNwZmpmNjg4a3A2NmUweGR4aTlsM2RtZjk3dHljdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wNipYAoZ3iaEE/giphy.gif';
            } else if (description.includes('rain') || description.includes('shower')) {
                suggestion = "It's raining, don't forget your umbrella!";
                img.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXprOGpvazh6d25jMXkxcXM3Zmd4YnV0NnZ5aGR6MGM2OTIwazh5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eyoDFbM8UwpIsjG8iI/giphy.gif';
            } else if (description.includes('snow')) {
                suggestion = "It's snowy, perfect for a snowball fight!";
                img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGt3ODl6YmN0MHF6MnB2bnhpNDZvbG80OGk1bjBxZW9oemFiNjNvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlFCPviJKE9Opvq/giphy.gif';
            } else if (description.includes('clouds')) {
                suggestion = "It's cloudy, maybe stay inside and read a book.";
                img.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXkxNmF3YTR2eTMzb3dobXE4enVsNHVla2h1OGVzaHd4NmJpbnJ5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/54BB7UhX573Qhh8k1l/giphy.gif';
            } else {
                suggestion = "Enjoy the weather!";
                img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NtbnI2aWt2bW5ka3NhajMxcmFvbWhyaDJiMzM5cDMxbzl0aWJ1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif';
            }

            // Additional suggestion temperature
            if (temp < 0) {
                suggestion = "<br>It's freezing cold outside, make sure to bundle up!";
                img.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2w5MTVrNmR6N2tiaGZsdWpiY3kwa2xqZ3k5MzZhb3BndGxzbHBzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/s4Bi420mMDRBK/giphy.gif';
            }else if(temp < -20 && temp > 0) {
                suggestion += "<br>It's the ice age!";
            } 
            else if (temp > 20 && temp < 30) {
                suggestion += "<br>It's quite hot today, stay hydrated!";
            } else if (temp > 20 && temp < 30) {
                suggestion += "<br>Don't melt and remember your sunscreen!";
            } else if(temp > 30){
                suggestion = "<br>Welcome to Hell!";
                img.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3NtbnI2aWt2bW5ka3NhajMxcmFvbWhyaDJiMzM5cDMxbzl0aWJ1cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif';
            }

            // Additional suggestion wind speed
            if (windSpeed > 35) {
                suggestion = "<br>It's too late, save yourself!";
                img.src = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXFzNXhybTYxbHJiMHF1d2JobTFsbmJhYzc5djFkNmFpc3lwbHE5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4cwCcAjfX9Yw8/giphy.gif';
            }else if(windSpeed > 15 && windSpeed < 35) {
                suggestion += "<br>It's very windy, hold on to your hat!";
            } else if (windSpeed > 5 && windSpeed < 15) {
                suggestion += "<br>It's a bit windy, a light jacket should do.";
            }

            suggestionElem.innerHTML = suggestion; 
            weatherInfo.style.display = 'block';
        })
        .catch(err => {
            console.error(err);
            alert("An error occurred while fetching the weather.");
        });
}

getWeatherBtn.addEventListener('click', getWeather);

cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});



// monster random position


const monster = document.getElementById('monster');

function moveMonster() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const randomX = Math.random() * (windowWidth - monster.clientWidth);  // Minus monster width to avoid overflowing
    const randomY = Math.random() * (windowHeight - monster.clientHeight);  // Minus monster height to avoid overflowing

    monster.style.position = 'absolute';  
    monster.style.left = `${randomX}px`;  
    monster.style.top = `${randomY}px`;  
}

setInterval(moveMonster, 1000);
