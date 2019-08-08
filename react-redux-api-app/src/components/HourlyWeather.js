import React from "react";
import moment from "moment";

const HourlyWeather = ({ weather }) => {
  return (
    <div className="hourly-data">
      <h3>24-Hour Forecast</h3>
      {weather.hourly.data.map((hour, index) => {
        if (index < 24 && index % 2 !== 0) {
          return (
            <div className="hourly-weather-info">
              <div className="hour">
                {moment.unix(hour.time).format("ddd, hA")}
              </div>
              <div className="hour temp">
                {Math.round(hour.temperature)}&deg;
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default HourlyWeather;
