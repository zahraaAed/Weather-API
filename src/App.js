import React, {useEffect, useState} from "react";
import './App.css'

import partlyCloudy from '../src/img/weather-icons/partlycloudy.svg';
import json from './fakeWeatherData.json';
import Search from './components/Search.js';
import CurrentWeather from "./components/currentWeather";
import WeatherItem from "./components/WeatherItem";
import axios from "axios";


const  App=()=>{
  const [formResult,setFormResult]=useState("");
  const [data,setData]=useState();
  const [weatherItems,setWeatherItems]=useState([]);

  const handleClick=(event)=>{
    event.preventDefault();
    setFormResult(document.getElementById("input").value);
  }
 
useEffect (()=>{
  
const fetchData=async () =>{ 
 
  await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${formResult?formResult:"London"}&cnt=8&units=metric&appid=5db77d6e5ceb647509faa504641b199b`).then(response=>{

   setData(response.data);

setWeatherItems(data?data.list.map(item=><WeatherItem key={data.dt} temp={item.main.temp} hour={item.dt_txt.split(" ")[1].slice(0,5)}
imgUrl={partlyCloudy}/>):"Loading");
 
  }).catch(err=>{

   alert("You may misspelled or enter a wrong city, try again:")

  });

}
  fetchData();

},[formResult]);

  return(
 <>
  <header>
    {data?
    <Search city={data.city.name} handleClick={handleClick}/>:
    <p>Loading ...</p>
  }
  </header>
  <CurrentWeather minTemp={data?data.list[0].main.temp_min.toFixed(0):"..."} maxTemp={data?data.list[0].main.temp_max.toFixed(0):"..."}
   hum={data?data.list[0].main.humidity:"..."} pressure={data?data.list[0].main.pressure:"..."} />

        
       <div className="forecast">
        {weatherItems}
       </div>
      </>
);
}

export default App;