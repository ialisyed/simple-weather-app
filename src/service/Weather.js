import axios from 'axios';
import { BASE_URL } from "../constants/API";
import GENERAL from '../constants/General';

/**
 * Params that will be constant for every api call of weather api
 */
const CONST_PARAMS = { q: GENERAL.CITY_AND_STATE, APPID: GENERAL.APP_ID, cnt: 40 };

/**
 * Make API call to fetch weather data
 * @param {String} units 
 */
async function fetchThreeHrWeather(units = 'metric') {
    const params = { ...CONST_PARAMS, units };
    try {
        return axios.get(BASE_URL, { params }).then(res => res.data);
    } catch (e) {
        return [];
    }
}

export { fetchThreeHrWeather };