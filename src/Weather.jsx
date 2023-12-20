import React ,{useEffect}from 'react'




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
case "Clouds":setWeatherState("/images/cloud-sun-solid.svg");
break;
case "Haze":
  setWeatherState("images/smog-solid.svg");
break;
case "Clear":
  setWeatherState("images/brightness-high.svg");
break;
case "Mist":
  setWeatherState("images/cloud-fog2.svg");
break;
case "Smoke":
  setWeatherState("images/svgviewer-output.svg");
break;
default:
  setWeatherState("images/cloud-sun-solid.svg");
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
      <img src={`${weatherState}`} alt="img" />
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