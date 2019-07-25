import React from "react";

const CurrentWeatherDetails = ({ weather }) => {
  console.log(weather);

  return (
    <div className="current-weather-details-container">
      <div className="current-weather-details">
        <div>
          <h6>
            <strong>Wind:</strong>
          </h6>
          <p>{weather.currently.windSpeed} mph</p>
        </div>
        <div>
          <h6>
            <strong>Humidity:</strong>
          </h6>
          <p>{weather.currently.humidity}%</p>
        </div>
        <div>
          <h6>
            <strong>Dew Pt:</strong>
          </h6>
          <p>{weather.currently.dewPoint}%</p>
        </div>
        <div>
          <h6>
            <strong>UV Index:</strong>
          </h6>
          <p>{weather.currently.uvIndex}</p>
        </div>
        <div>
          <h6>
            <strong>Visibility:</strong>
          </h6>
          <p>{weather.currently.visibility} miles</p>
        </div>
        <div>
          <h6>
            <strong>Pressure:</strong>
          </h6>
          <p>{weather.currently.pressure} mb</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
