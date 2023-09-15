import React from "react";
import './App.css'
import Img1 from '../src/img/weather-icons/cloudy.svg';
import Img2 from '../src/img/weather-icons/clear.svg';
import partlyCloudy from '../src/img/weather-icons/partlycloudy.svg';
import json from './fakeWeatherData.json';
import Search from './components/Search.js';
import CurrentWeather from "./components/currentWeather";
import WeatherItem from "./components/WeatherItem";
const App=()=>{
  return(
 <>
  <header>
 <Search/>
  </header>
  <CurrentWeather minTemp={10} maxTemp={11} hum={78} pressure={1008.48} />

        
       <div className="forecast">
        <WeatherItem hour={3} temp={8} imgUrl={partlyCloudy}  />
        <WeatherItem hour={6} temp={9} imgUrl={partlyCloudy} />
        <WeatherItem hour={9} temp={14} imgUrl={Img2}/>
        <WeatherItem hour={12} temp={17} imgUrl={Img2}/>
        <WeatherItem hour={15} temp={18} imgUrl={Img2}/>
        <WeatherItem hour={18} temp={16} imgUrl={Img2}/>
        <WeatherItem hour={21} temp={13} imgUrl={partlyCloudy}/>


       </div>
      </>
);
}

export default App;