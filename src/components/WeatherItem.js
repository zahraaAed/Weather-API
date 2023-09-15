import React from "react";
import Img2 from '../img/weather-icons/partlycloudy.svg'
import './weatherItem.css';

const WeatherItem =({temp,imgUrl ,hour})=>{
  return (
    <div className="card">

          <p>{hour}:00</p>
          <img src={imgUrl} alt="cloudy"/>
          <p>{temp}° C</p>

        </div>
  );
}

export default WeatherItem;