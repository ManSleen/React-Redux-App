import React from "react";
import { Input, Button } from "semantic-ui-react";

const Location = ({ weather }) => {
  return (
    <div className="weather-dashboard-location-container">
      <div className="weather-dashboard-location">
        <div className="location current">
          <span className="current-location">Current Location: </span>
          <span className="weather-timezone">{weather.timezone}</span>
        </div>
        <div className="location search">
          <Input size="mini" icon="search" placeholder="Search..." />
        </div>
        <div className="location units">
          <Button secondary>Convert to Metric</Button>
        </div>
      </div>
    </div>
  );
};

export default Location;
