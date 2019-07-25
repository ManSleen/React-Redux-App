import React from "react";

const Location = ({ weather }) => {
  return (
    <div className="weather-dashboard-location-container">
      <div className="weather-dashboard-location">
        <div className="location current">
          <strong>Current Location: </strong>
          {weather.timezone}
        </div>
        <div className="location search">
          <input placeholder="Location Search" />
        </div>
        <div className="location units">Convert to Metric</div>
      </div>
    </div>
  );
};

export default Location;
