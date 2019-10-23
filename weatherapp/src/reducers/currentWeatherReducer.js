const initialState={
    fetched:false,
    cWeather:[],
    error:null,
}
const currentWeatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_CURRENT_WEATHER':
        return {
            ...state,
            fetched:true,
            ...action.payload}
           case 'FETCH_CURRENT_WEATHER_REJECTED':
           return {...state,error:action.payload}
          
           default :
           return state;
    }
};
export default currentWeatherReducer;