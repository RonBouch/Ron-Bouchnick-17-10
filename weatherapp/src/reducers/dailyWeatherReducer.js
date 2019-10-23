const initialState={
    fetched:false,
    dWeather:[],
    error:null,
}
const dailyWeatherReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_5_DAY_DAILY_FORECAST':
        return {
            ...state,
            fetched:true,
            ...action.payload}
           case 'FETCH_5_DAY_DAILY_FORECAST_REJECTED':
           return {...state,error:action.payload}
          
           default :
           return state;
    }
};
export default dailyWeatherReducer;