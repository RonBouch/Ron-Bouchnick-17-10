import React, { Component } from 'react'
import { connect } from 'react-redux'
class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state={
          data:null
        }

    }

    async componentDidMount() {
      let data= await this.props.favorite.favorite;
      this.setState({data:data})
       
       console.log("d",data)
    }
    goHomePage=(city)=>{
      this.props.history.push({
        pathname:"/",
        state: { detail: city }
      })
    }
    render() {
      let cities = this.props.favorite.favorite.map((city,i)=>{
        return (
          <div key={i}  className="dailyWeatherForm" onClick={()=>this.goHomePage(city)}>
            {city.city}<br></br>
            {city.temp.Metric.Value} *{city.temp.Metric.Unit}<br></br>
            {city.wText}
          </div>
        )
      })
     
      
        return (
            <div className="weatherForm">
            <div style={{display:'flex',flexDirection:'row-reverse',justifyContent: 'space-between',flexFlow: 'row wrap',marginTop:'10%'}}>
                 {cities}
            </div>           
            </div>
          
        )
    }
}
function mapStateToProps(state){
    return{
      cities:state.city,
      cWeather:state.cWeather,
      dWeather:state.dWeather,
      favorite:state.favorite
    }
  }
  export default  connect(
    mapStateToProps,
    
  )(Favorite)


   