import React from "react";

const CurrentForecast = ({ weather }) => {
  return (
    <div className="current-forecast-container">
      <h1>
        {weather.currently.temperature}&deg; {weather.currently.summary}
      </h1>
    </div>
  );
};

export default CurrentForecast;
