const myKey = "b1a366c3b77c247adbf99eab7f3dae49";
const myLat = "-12.97";
const myLon = "-38.50";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}&units=metric`;

async function getWeatherData() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error("Error fetching data.");            
        }
    } catch (error){
        console.error("Error fetching data:", error);
    }
}

function displayWeather(data) {
    const iconBox = document.querySelector('#weather-icon-box');
    const icon = document.createElement('img');

    const temp = document.querySelector('#current-temp');
    const desc = document.querySelector('#weather-desc');

    temp.textContent = `${Math.round(data.main.temp)}°C`;
    desc.textContent = `${data.weather[0].description}`;

    

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = `${data.weather[0].description}`;
    iconBox.appendChild(icon);
}

async function getForecastData() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();

            const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
            const threeDays = daily.slice(0, 3);
            displayForecast(threeDays);
        } else {
            throw Error("Error fetching data.")
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayForecast(days) {
    const container = document.querySelector('#forecast');

    days.forEach(day => {
        const block = document.createElement('div');
        block.classList.add('forecast-day');

        const dayDate = new Date(day.dt * 1000);

        const name = document.createElement('p');
        name.classList.add('day-name');
        name.textContent = dayDate.toLocaleDateString('en-US', {weekday: 'short'});

        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        icon.alt = day.weather[0].description;

        const temp = document.createElement('p');
        temp.classList.add('day-temp');
        temp.textContent = `${Math.round(day.main.temp)}°C`;

        block.appendChild(icon);
        block.appendChild(name);
        block.appendChild(temp);

        container.appendChild(block);
    })
}

getForecastData();
getWeatherData();