import React from "react";
import Img1 from '../img/weather-icons/cloudy.svg'
import './currentWeather.css';

const CurrentWeather=({minTemp,maxTemp,hum,pressure})=>{
    return(
        <div className="images"> 
       <img id="img1" src={Img1} alt="cloudy-img" />
       <h1>cloudy</h1>
       <h2><b>Temperature</b>    {minTemp}° to {maxTemp}°C</h2>
       <p><b>Humidity</b> {hum}%  <b>Pressure</b>  {pressure}</p>
       </div>
    );
}

export default CurrentWeather;