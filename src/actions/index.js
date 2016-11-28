import axios from 'axios';

const API_KEY = 'b3503d7466a4f79e4c367913e6ebf6c6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},UK`;
    const request = axios.get(url);   

    return {
        type: FETCH_WEATHER,
        payload: request // redux promise holds the action until the promise is resolved
    };
}