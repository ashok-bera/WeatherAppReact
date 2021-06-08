import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import "weather-icons/css/weather-icons.css";
import Form from './app_component/form.component';
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const api = 'e9d4a03dc16743d6e8ec129e7f34ddfd';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      temp:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
    

    this.weathericon ={
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"

    };
  }

  claCelsius(temp){
    let cell = Math.floor(temp-273.15);
    return cell;
  }

  getweathericon(icons, range){
    switch(true){
      case range>=200 && range <= 232:
        this.setState({icon:this.weathericon.Thunderstorm});
        break;
        case range >= 300 && range <= 321:
          this.setState({ icon: icons.Drizzle });
          break;
        case range >= 500 && range <= 521:
          this.setState({ icon: icons.Rain });
          break;
        case range >= 600 && range <= 622:
          this.setState({ icon: icons.Snow });
          break;
        case range>= 701 && range <= 781:
          this.setState({ icon: icons.Atmosphere });
          break;
        case range === 800:
          this.setState({ icon: icons.Clear });
          break;
        case range >= 801 && range <= 804:
          this.setState({ icon: icons.Clouds });
          break;
        default:
          this.setState({ icon: icons.Clouds });
      
    }
  }

  getWeather = async e =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const apiCall = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}`);
      const response = await apiCall.json();
    
    this.setState({
      city:`${response.name},${response.sys.country}`,
      country:response.sys.country,
      main:response.weather[0].main,
      temp:this.claCelsius(response.main.temp),
      temp_min:this.claCelsius(response.main.temp_min),
      temp_max:this.claCelsius(response.main.temp_max),
      description:response.weather[0].descripption,
      error:false
      
    });
    // here we are trying to fetch weather icon and id for each icon which has been used in api
    this.getweathericon(this.weathericon,response.weather[0].id);
  }
  else{
    this.setState({
      error:true
    });
  }
  };

  render(){
    return(
      <div className = "App">
      <Form  loadweather = {this.getWeather} error = {this.state.erroe}/>
      <Weather  city = {this.state.city} 
      country = {this.state.country}
      temp = {this.state.temp}
      temp_min = {this.state.temp_min}
      temp_max = {this.state.temp_max}
      description = {this.state.description}
      weathericon = {this.state.icon}
      />

      </div>
    );
  }
}

export default App;