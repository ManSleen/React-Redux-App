import React from "react";
import DarkskyMap from "react-darksky-map";

const WeatherMap = props => {
  console.log(props);
  return (
    <div className="weather-map-container">
      <DarkskyMap
        lat={props.coords.lat}
        lng={props.coords.long}
        zoom={8}
        mapField="precip"
      />
    </div>
  );
};

export default WeatherMap;
