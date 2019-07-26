import React from "react";
import DarkskyMap from "react-darksky-map";

const WeatherMap = props => {
  console.log(props);
  return (
    <div className="weather-map-container">
      <DarkskyMap
        lat={props.coords.lat}
        lng={props.coords.long}
        zoom={6}
        height="800px"
        mapField="temp"
      />
    </div>
  );
};

export default WeatherMap;
