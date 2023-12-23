import React ,{useEffect}from 'react'
import Clear from "./Images/brightness-high.svg";
import Cloud from "./Images/cloud-sun-solid.svg";
import Haze from "./Images/smog-solid.svg";
import Mist from "./Images/cloud-fog2.svg";
import Smoke from "./Images/svgviewer-output.svg";




const Weather = ({
    temp,
    humidity,
    pressure,weathermood,
    name,speed,country,
    sunset,

  }) => {
       const [weatherState,setWeatherState]=React.useState("");

       useEffect(()=>{
        if(weathermood){
          switch( weathermood){
case "Clouds":
  setWeatherState(<img src={Cloud} alt="sunset"/>);
break;
case "Haze":
  setWeatherState(<img src={Haze} alt="sunset"/>);
break;
case "Clear":
  setWeatherState(<img src={Clear} alt="sunset"/>);
break;
case "Mist":
  setWeatherState(<img src={Mist} alt="sunset"/>);
break;
case "Smoke":
  setWeatherState(<img src={Smoke} alt="sunset"/>);
break;
default:
  setWeatherState(<img src={Cloud} alt="sunset"/>);
break;
          }
        }
       },[weathermood]);
let sec=sunset;
let date=new Date(sec*1000);
let timeStr=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <article className="widget">
    <div className="weatherIcon">
      {weatherState}
    </div>
    <div className="weather-card">
      <div className="weatherInfo">
        <div className="temperature">
          <span>{temp}&deg;</span>
        </div>
        <div className="description">
          <div className="weatherCondition">{weathermood}</div>
          <div className="place">{name},{country}</div>
        </div>
      </div>
      <div className="date">{new Date().toLocaleString ()}</div>
    </div>
    <div className="extra-temp">
      <div className="temp-info-minmax">
        <div className="two-sided-section">
          <p class="img-sunset" >
        
          <img src=".\images\sunset.svg" alt="sunset"/>
          </p>
          <p className="extra-info-leftside">
          {timeStr} PM<br />
         Sunset
          </p>
        </div>
        <div className="two-sided-section">
          <p>
          <img src="./images/arrow-down-up.svg" alt="speed"/>
          </p>
          <p className="extra-info-leftside">
          {pressure} <br />
      Pressure
          </p>
        </div>
        <div className="two-sided-section">
          <p>
          <img src="./images/wind.svg" alt="speed"/>
          </p>
          <p className="extra-info-leftside">
            {speed}<br />
          speed
          </p>
        </div>
        <div className="two-sided-section">
          <p>
            <img   src="./images/droplet.svg" alt="humidity"/>
          </p>
          <p className="extra-info-leftside">
            {humidity} <br />
            humidity
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}

export default Weather