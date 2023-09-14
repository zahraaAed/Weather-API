import React from "react";
import './App.css'
import Img1 from '../src/img/weather-icons/cloudy.svg';
import Img2 from '../src/img/weather-icons/clear.svg';
import Img3 from '../src/img/weather-icons/snow.svg';
import Img4 from '../src/img/weather-icons/drizzle.svg';
import partlyCloudy from '../src/img/weather-icons/partlycloudy.svg';
import json from './fakeWeatherData.json'

console.log(json);
const App=()=>{
  return(
 <>
  <header>
 <form>

<label for="country">London</label>
<button type="submit">Find Weather</button>
  </form>
  </header>

        <div className="images"> 
       <img id="img1" src={Img1} alt="cloudy-img" />
       <h1>cloudy</h1>
       <h2><b>Temperature</b>    10° to 11°C</h2>
       <p><b>Humidity</b> 78%  <b>Pressure</b>  1008.48</p>
       </div>
       <div className="forecast">

        <div className="card">

          <p>03:00</p>
          <img src={partlyCloudy} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={partlyCloudy} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={Img2} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={Img2} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={Img2} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={Img2} alt="cloudy"/>
          <p>8° C</p>

        </div>
        <div className="card">

          <p>03:00</p>
          <img src={partlyCloudy} alt="cloudy"/>
          <p>8° C</p>

        </div>


       </div>
      </>
);
}

export default App;