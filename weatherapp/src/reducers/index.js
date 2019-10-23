import cityReducer from './cityReducer'
import currentWeatherReducer from './currentWeatherReducer'
import dailyWeatherReducer from './dailyWeatherReducer'
import favoriteReducer from './favoriteReducer'
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    city:cityReducer,
    cWeather:currentWeatherReducer,
    dWeather:dailyWeatherReducer,
    favorite:favoriteReducer
});
export default allReducers;