import React from "react";

import Location from "./Location";
import CurrentWeatherDetails from "./CurrentWeatherDetails";

const WeatherDashboard = () => {
  return (
    <div className="weather-dashboard-container">
      <Location />
      <CurrentWeatherDetails />
    </div>
  );
};

export default WeatherDashboard;
