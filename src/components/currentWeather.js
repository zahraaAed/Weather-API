import React from "react";
import Img1 from '../img/weather-icons/cloudy.svg'
import './currentWeather.css';

const CurrentWeather=()=>{
    return(
        <div className="images"> 
       <img id="img1" src={Img1} alt="cloudy-img" />
       <h1>cloudy</h1>
       <h2><b>Temperature</b>    10° to 11°C</h2>
       <p><b>Humidity</b> 78%  <b>Pressure</b>  1008.48</p>
       </div>
    );
}

export default CurrentWeather;