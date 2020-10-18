import WEATHER_ACTIONS from '../../constants/actions';

const initialState = {
    data: null,
    loading: true
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case WEATHER_ACTIONS.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case WEATHER_ACTIONS.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case WEATHER_ACTIONS.FETCH_WEATHER_FAILURE:

            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default weatherReducer;