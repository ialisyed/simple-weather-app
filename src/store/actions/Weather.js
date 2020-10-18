import { request, success, failure } from './index';
import WEATHER_ACTIONS from '../../constants/actions';
import WeatherManager from '../../manager/Weather';

/**
 * fetches and returns parse weather data to the store
 */
function getWeather() {
    return async dispatch => {
        dispatch(request(WEATHER_ACTIONS.FETCH_WEATHER_REQUEST));
        try {
            let data = await WeatherManager.getWeatherData();
            dispatch(success(WEATHER_ACTIONS.FETCH_WEATHER_SUCCESS, data));
        } catch (e) {
            dispatch(failure(WEATHER_ACTIONS.FETCH_WEATHER_FAILURE, e));
        }
    }
}

export { getWeather };