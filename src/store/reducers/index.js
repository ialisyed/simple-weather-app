import { combineReducers } from 'redux';
import weather from './Weather';

const reducers = combineReducers({
    weather,
});

export default reducers