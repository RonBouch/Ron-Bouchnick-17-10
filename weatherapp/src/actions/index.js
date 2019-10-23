export const FETCH_CITY='FETCH_CITY'
export const FETCH_CURRENT_WEATHER='FETCH_CURRENT_WEATHER'
export const FETCH_5_DAY_DAILY_FORECAST='FETCH_5_DAY_DAILY_FORECAST'
export const ADD_FAVORITE='ADD_FAVORITE';
export const DEL_FAVORITE='DEL_FAVORITE';

export const getCities=(city)=>{
    return(dispatch)=>{
        fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=RbXATzr13DXqLKDxIAT4WM0V4wXdHb7b&q="+city)
       .then(res=>res.json())
       .then(cities=>{
        dispatch({type:"FETCH_CITY",payload:cities})
    })
    .catch((err)=>{
        dispatch({type:"FETCH_CITY_REJECTED",payload:err})
    })
    }}


    export const getCurrentWeather=(cityKey)=>{
        console.log("cityKey = "+cityKey)
        return(dispatch)=>{
            fetch("http://dataservice.accuweather.com/currentconditions/v1/"+cityKey+"?apikey=RbXATzr13DXqLKDxIAT4WM0V4wXdHb7b")
           .then(res=>res.json())
           .then(cWeather=>{
            dispatch({type:"FETCH_CURRENT_WEATHER",payload:cWeather})
        })
        .catch((err)=>{
            dispatch({type:"FETCH_CURRENT_WEATHER_REJECTED",payload:err})
        })
        }}

        export const get5DayDailyForecast=(cityKey)=>{
            console.log("cityKey = "+cityKey)
            return(dispatch)=>{
                fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityKey+"?apikey=RbXATzr13DXqLKDxIAT4WM0V4wXdHb7b")
               .then(res=>res.json())
               .then(dailyWeather=>{
                dispatch({type:"FETCH_5_DAY_DAILY_FORECAST",payload:dailyWeather})
            })
            .catch((err)=>{
                dispatch({type:"FETCH_5_DAY_DAILY_FORECAST_REJECTED",payload:err})
            })
            }}

            export const addFavorite=(cityDetails)=>{
                console.log("cityDetails = ",cityDetails)
                return(dispatch)=>{
                    dispatch({type:"ADD_FAVORITE",payload:cityDetails})
                }
                }
                export const delFavorite=(cityDetails)=>{
                    console.log("cityDetails = ",cityDetails)
                    return(dispatch)=>{
                        dispatch({type:"DEL_FAVORITE",payload:cityDetails})
                    }
                    }
    
    