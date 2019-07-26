import React from "react";

import Skycons from "react-skycons";

const CurrentForecast = ({ weather }) => {
  return (
    <div className="current-forecast-container">
      <div className="skycon-container">
        <Skycons
          color="black"
          icon={`${weather.currently.icon.replace(/-/g, "_").toUpperCase()}`}
          autoplay={true}
        />
      </div>
      <div className="weather-container">
        <h1>
          {Math.round(weather.currently.temperature)}&deg;{" "}
          {weather.currently.summary}
        </h1>
        <div className="high-low-container">
          <div className="low">
            <span className="high-low">Low: </span>
            {Math.round(weather.daily.data[0].temperatureLow)}&deg;
          </div>
          <div className="high">
            <span className="high-low">High: </span>
            {Math.round(weather.daily.data[0].temperatureHigh)}&deg;
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
