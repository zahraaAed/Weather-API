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
  <CurrentWeather />

        
       <div className="forecast">
        <WeatherItem  />
        <WeatherItem  />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />
        <WeatherItem />


       </div>
      </>
);
}

export default App;