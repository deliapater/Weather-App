import axios from 'axios';

const baseUrl = `https://api.openweathermap.org/data/2.5/`;

 const appIdQueryParam = `appid=${process.env.REACT_APP_API_KEY}`;

function getCurrentWeather(location) {
   return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&${appIdQueryParam}`
    );
}

function getForecast(lat, lon) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&${appIdQueryParam}`)
}

export {getCurrentWeather, getForecast};