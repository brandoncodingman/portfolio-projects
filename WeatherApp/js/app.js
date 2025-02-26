
const weatherInfo = document.getElementById('weather-info');
const temperatureElem = document.getElementById('temperature');
const descriptionElem = document.getElementById('description');
const suggestionElem = document.getElementById('suggestion');
const getWeatherBtn = document.getElementById('get-weather');
const img = document.getElementById('img');
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)



    async function fetchData() {
        try {
          let response = await fetch('https://api.example.com/data');
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error); // Handle errors if the promise fails
        }
      }
      

      

      require('dotenv').config();

      const apiKey = process.env.API_KEY;
      
      console.log(apiKey);  // For testing purposes
      



