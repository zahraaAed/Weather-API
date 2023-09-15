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
  const list=json.list.slice(1,8);
  const weatherItemsList=list.map(item=><WeatherItem temp={item.main.temp} hour={item.dt_txt.split(" ")[1].slice(0,2)} imgUrl={partlyCloudy}/>)
  console.log(list);
  return(
 <>
  <header>
 <Search city={json.city.name}/>
  </header>
  <CurrentWeather minTemp={json.list[0].main.temp_min} maxTemp={json.list[0].main.temp_max} hum={json.list[0].main.humidity} pressure={json.list[0].main.pressure} />

        
       <div className="forecast">
        {weatherItemsList}


       </div>
      </>
);
}

export default App;