export const ICON_REPLACER = '{{icon}}}';

const GENERAL = {
    APP_ID: '75f972b80e26f14fe6c920aa6a85ad57',
    CITY_AND_STATE: 'Munich,de',
    /**
     * Image url to get weather icon
     */
    ICON_URL: `http://openweathermap.org/img/wn/${ICON_REPLACER}@2x.png`,
    UNITS: {
        CELSIUS: 'metric',
        FAHRENHEIT: 'imperial',
    },
    DATA_KEYS_MAP: {
        CELSIUS: 'celsiusData',
        FAHRENHEIT: 'fahrenheitData',
    },
    DATE_FORMATS: {
        hh_mm_ss_a: 'hh:mm:ss a',
        LL: 'LL',
    }
}


export default GENERAL;