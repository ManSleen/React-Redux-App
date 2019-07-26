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

      <h1>
        {weather.currently.temperature}&deg; {weather.currently.summary}
      </h1>
    </div>
  );
};

export default CurrentForecast;
