import React, { useState, useEffect } from "react";

function Weather(props, cloudActive) {
  const [weatherTemp, setWeatherTemp] = useState(75);
  const [weatherName, setWeatherName] = useState("Today");
  const [weatherShort, setWeatherShort] = useState("beautiful");
  console.log(cloudActive);

  useEffect(() => {
    fetch("https://api.weather.gov/gridpoints/TOP/41,82/forecast").then(
      (res) => {
        res.json().then((result) => {
          setWeatherTemp(result.properties.periods[0].temperature);
          setWeatherName(result.properties.periods[0].name);
          setWeatherShort(result.properties.periods[0].detailedForecast);
          //   Set Weather for Tomorrow
        });
      }
    );
  });

  return (
    <div className={props.cloudActive}>
      <h1>Weather Information</h1>
      <p>{`The forecast for ${weatherName}: ${weatherShort}`}</p>
      <p>
        <div>
          <small>
            {"Source: "}
            <a href="https://www.weather.gov/documentation/services-web-api">
              weather.gov
            </a>
          </small>
        </div>
      </p>
      <p></p>
    </div>
  );
}

export default Weather;
