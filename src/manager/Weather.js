import GENERAL from "../constants/General";
import { fetchThreeHrWeather } from "../service/Weather";

/**
 * returs parsed weather data
 */
async function getWeatherData() {
    const [celsiusData, fahrenheitData] = await Promise.all([
        manageWeatherApiCall(GENERAL.UNITS.CELSIUS),
        manageWeatherApiCall(GENERAL.UNITS.FAHRENHEIT),
    ]);
    return { celsiusData, fahrenheitData };
}
/**
 * parse api response as soon as response arrives
 * @param {String} units 
 */
function manageWeatherApiCall(units) {
    return fetchThreeHrWeather(units).then(data => parseWeatherData(data));
}

/**
 * Parse weather api response to simplify data handling in Screen
 * @param {Object} data - Api response
 */
function parseWeatherData(data) {
    const dataMap = {};
    data.list.forEach(val => {
        // create a map containing relevant values against each data
        // by splitting dt_txt to get data string
        const date = val.dt_txt.split(' ')[0];
        if (!dataMap[date]) {
            dataMap[date] = { values: [val] }
        } else {
            dataMap[date].values.push(val);
        }
    });

    // add average temprature to dataMap against each date
    Object.keys(dataMap).forEach(key => {
        const tempSum = dataMap[key].values.reduce((prev, current) => ({ main: { temp: prev.main.temp + current.main.temp } }), { main: { temp: 0 } });
        const tempAvg = tempSum.main.temp / dataMap[key].values.length;
        dataMap[key] = { ...dataMap[key], tempAvg };
    })
    return dataMap;
}

export default {
    getWeatherData,
}