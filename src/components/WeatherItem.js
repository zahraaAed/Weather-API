import React from "react";
import Img2 from '../img/weather-icons/partlycloudy.svg'
import './weatherItem.css';

const WeatherItem =({temp,imgUrl ,hour,key})=>{
  return (
    <div className="card">

          <p>{hour}</p>
          <img src={imgUrl} alt="cloudy"/>
          <p>{temp.toFixed(0)}° C</p>

        </div>
  );
}

export default WeatherItem;