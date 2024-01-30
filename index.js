const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherContainer = document.querySelector(".weather");

// async function getWeather() {
//     const url = 'https://open-weather13.p.rapidapi.com/city/fergana';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '143e7e8de4mshe3a76fabf6652b1p1aeb6fjsn9f75c6e1c4f6',
//             'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const weatherData = result.weather;


//         if (Array.isArray(weatherData)) {
//             weatherData.forEach(weather => {
//                 console.log(weather);
//                 let card = createCard(weather);
//                 weatherContainer.innerHTML += card;
//             });
//         } else {
//             console.error('Data is not an array:', weatherData);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }


// getWeather();


async function getWeather() {
    const apiKey = '143e7e8de4mshe3a76fabf6652b1p1aeb6fjsn9f75c6e1c4f6';
    const cityInput = document.getElementById('cityInput').value;

    const url = `https://open-weather13.p.rapidapi.com/city/${cityInput}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Display weather information
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<div class="weather">
        <h1 class="city">${cityInput}</h1>
        <div class="main">
            <div class="day">
                <img class="rainImg" src="./imgs/rainy-day.png" alt="">
                <h2 class="tempDay">${result.main.temp}°C</h2>
            </div>
            <div class="night">
                <img class="rainImg" src="./imgs/night.png" alt="">
                <h2 class="temp">${result.main.temp}°C</h2>
            </div>
        </div>
        <div class="details">
            <div class="col">
                <img class="humidityImg" src="./imgs/humidity.png" alt="">
                <div>
                    <p class="humidity">${result.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
            <div class="col">
                <img class="windImg" src="./imgs/wind.png" alt="">
                <div>
                    <p class="wind">${result.wind.speed} km/h</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    </div>`;

    } catch (error) {
        console.error(error);
        alert('Error fetching weather data. Please try again.');
    }
}