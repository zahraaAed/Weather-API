import React from "react";
import Img2 from '../img/weather-icons/partlycloudy.svg'
import './weatherItem.css';

const WeatherItem =()=>{
  return (
    <div className="card">

          <p>03:00</p>
          <img src={Img2} alt="cloudy"/>
          <p>8° C</p>

        </div>
  );
}

export default WeatherItem;