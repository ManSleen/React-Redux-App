import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Location from "./Location";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import WeatherMap from "./WeatherMap";

import { fetchWeather } from "../store/actions";

const WeatherDashboard = props => {
  props.fetchWeather();

  if (!props.weather) {
    return (
      <div className="weather-loader-spinner">
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
        We're loading your weather, sit tight!
      </div>
    );
  } else {
    return (
      <div className="weather-dashboard-container">
        <Location weather={props.weather} />
        <CurrentWeatherDetails weather={props.weather} />
        <CurrentForecast weather={props.weather} />
        <WeatherMap />
        <WeeklyForecast />
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    weather: state.weather
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherDashboard);
