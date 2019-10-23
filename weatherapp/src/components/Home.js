import React from 'react'
import city from '../data/cities.json'
// import cWeather from '../data/currentWeather.json'
// import dailyWeather from '../data/dailyWeather.json'
import Icon from 'react-icons-kit'
import {heartO} from 'react-icons-kit/fa/heartO'

import { bindActionCreators } from 'redux';
import {getCurrentWeather,get5DayDailyForecast,getCities,delFavorite,addFavorite} from '../actions'
import { connect } from 'react-redux'
const br =<div><br></br><br></br></div>


class Home extends React.Component {
    constructor(props) {
        super(props);
      this.state={
        link:"",
        city:"",
        cityNameToSend:"tel%20aviv",
        cityKey:null,
        cityDetails:null,
        showDailyWeather:false
      }
    }
    async componentDidMount() {
       await this.props.getCities(this.state.cityNameToSend)
       if(this.props.location.state!=undefined){
         this.props.getCities(this.props.location.state.detail.city.replace(" ","%20"))
         this.fetchData(this.props.location.state.detail.key)
       }
      
    }
    changeCity=(e)=>
    {      
      let city=e.target.value
      city=city.replace(" ","%20")
      this.setState({
        cityNameToSend:city
      })

    }
    cityBtn =()=>{
      if(this.state.cityNameToSend!=="")
      {
        this.props.getCities(this.state.cityNameToSend)
      }
    }

    favBtn=()=>{
      this.updateDetails()
      if(this.state.cityDetails!=null)
      {
        let fav =this.props.favorite.favorite;
        let result = fav.filter(element => {
          return (this.state.cityDetails.City).indexOf(element.city) !== -1;
        });
        if(result==0){
          this.props.addFavorite(this.state.cityDetails);  
        }
        else{
          this.props.delFavorite(this.state.cityDetails)
        } 
          this.setState({cityDetails:null})
      }
    }

     async fetchData(cityKey){
     await this.props.get5DayDailyForecast(cityKey)
     await this.props.getCurrentWeather(cityKey)
     }
     updateDetails(){
        if(this.props.cWeather[0]!=null){
        this.setState({
          link:this.props.cWeather[0].Link,
          city:this.props.cities[0].LocalizedName,
          cityDetails:{
            Key:this.props.cities[0].Key,
            City:this.props.cities[0].LocalizedName,
            WText:this.props.cWeather[0].WeatherText,
            Temp:this.props.cWeather[0].Temperature
          }
        })
        
        }

    }

    render() {

     
      if(this.state.cityKey==null || this.state.cityKey!==this.props.cities[0].Key){
        if(this.props.cities[0]!=null){ 
          this.fetchData(this.props.cities[0].Key)
          // this.props.get5DayDailyForecast(this.props.cities[0].Key)
          // this.props.getCurrentWeather(this.props.cities[0].Key)
          this.setState({
            cityKey:this.props.cities[0].Key,
          })         
        }
      }
      if(this.props.cWeather[0]!=null&& this.props.cWeather[0].Link!==this.state.link){
           if(this.state.city!==this.props.cities[0].LocalizedName){
          this.setState({showDailyWeather:true})
           this.updateDetails()}
      }
        return (
            <div className="weatherForm">
            <input placeholder="Search.." onChange={this.changeCity}></input>
            <button  onClick={this.cityBtn} style={{display:'inline',alignSelf:'center'}}>Click</button>
            <div className="weatherForm2">

            <div style={{display:'flex',flexDirection:'row-reverse',justifyContent: 'space-between',flexFlow: 'row wrap'}}>
            { (this.props.cWeather[0]!=null )? 
            <div style={{backgroundColor:'yellow',display:'inline',padding:10}}>
            {this.props.cities[0].LocalizedName}<br></br>
            {this.props.cWeather[0].Temperature.Metric.Value} *{this.props.cWeather[0].Temperature.Metric.Unit}
            </div>  
            : <div style={{backgroundColor:'yellow',display:'inline',padding:10}}>
            {city[0].AdministrativeArea.LocalizedName}<br></br>
          </div>  }
           
            <div>
            <Icon icon={heartO} color='white'/>
            <button onClick={this.favBtn}>
            Add to favorite!
            </button>
             </div>
            </div>
            
             <h1>Scattered clouds</h1>

             { (this.props.cWeather[0]!=null )?

            <div style={{display:'flex',flexDirection:'row-reverse',justifyContent: 'space-between',flexFlow: 'row wrap',marginTop:'10%'}}>
            <div className="dailyWeatherForm">Sun{br}{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Value} *{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Unit}</div>
            <div className="dailyWeatherForm">Mon{br}{this.props.dWeather.DailyForecasts[1].Temperature.Maximum.Value} *{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Unit}</div>
            <div  className="dailyWeatherForm">Tue{br}{this.props.dWeather.DailyForecasts[2].Temperature.Maximum.Value} *{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Unit}</div>
            <div  className="dailyWeatherForm">Wed{br}{this.props.dWeather.DailyForecasts[3].Temperature.Maximum.Value} *{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Unit}</div>
            <div  className="dailyWeatherForm">Thu{br}{this.props.dWeather.DailyForecasts[4].Temperature.Maximum.Value} *{this.props.dWeather.DailyForecasts[0].Temperature.Maximum.Unit}</div>
            </div>
            :console.log(".")}

            </div>            
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
  return{
    getCurrentWeather:bindActionCreators(getCurrentWeather,dispatch),
    getCities:bindActionCreators(getCities,dispatch),
    get5DayDailyForecast:bindActionCreators(get5DayDailyForecast,dispatch),
    addFavorite:bindActionCreators(addFavorite,dispatch),
    delFavorite:bindActionCreators(delFavorite,dispatch)


  }
}
function mapStateToProps(state){
  return{
    cities:state.city,
    cWeather:state.cWeather,
    dWeather:state.dWeather,
    favorite:state.favorite,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  
)(Home)