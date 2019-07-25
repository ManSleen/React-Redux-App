import React, { useState, useEffect } from "react";
import DarkskyMap from "react-darksky-map";

const WeatherMap = () => {
  const [longitude, setLongitude] = useState(() => {
    return navigator.geolocation.getCurrentPosition(
      position => position.coords.longitude
    );
  });
  const [latitude, setLatitude] = useState(() => {
    return navigator.geolocation.getCurrentPosition(
      position => position.coords.latitude
    );
  });

  //   useEffect(() => {

  //   }, [longitude]);

  //   function getCoords() {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       setLongitude(position.coords.longitude);
  //       setLatitude(position.coords.latitude);
  //     });
  //   }

  return (
    <div className="weather-map-container">
      <DarkskyMap lat={latitude} lng={longitude} zoom={6} mapField="precip" />

      {console.log(latitude)}
    </div>
  );
};

export default WeatherMap;
