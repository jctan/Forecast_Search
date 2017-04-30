import axios from 'axios';

const API_KEY = '3a3f282df34e768eee3d7fa9af3e7062';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//to keep your action types consistent to your action creators and reducers.
export const FETCH_WEATHER = 'FETCH_WEATHER';

//create ajax request with redux-promise using axios
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); //redux promise - use axios to make ajax request

	return{
		type: FETCH_WEATHER,
		payload: request //stops the request action and waited for the promise to resolve. once it resolve, it took the data and put it into payload to all the reducers in your app
	};
}