import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Location from "./Location";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import WeatherMap from "./WeatherMap";
import HourlyWeather from "./HourlyWeather";

import { fetchWeather } from "../store/actions";

const WeatherDashboard = props => {
  props.fetchWeather();

  if (props.weather && props.coords) {
    return (
      <div className="weather-dashboard-container">
        <Location weather={props.weather} />
        <CurrentWeatherDetails weather={props.weather} />
        <CurrentForecast weather={props.weather} />
        <HourlyWeather weather={props.weather} />
        <WeatherMap coords={props.coords} />
      </div>
    );
  } else {
    return (
      <div className="weather-loader-spinner">
        <Loader type="Puff" color="rgb(69, 69, 197)" height="100" width="100" />
        We're loading your weather, sit tight!
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    weather: state.weather,
    coords: state.coords
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherDashboard);
