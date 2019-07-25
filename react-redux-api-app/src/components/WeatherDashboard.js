import React from "react";
import { connect } from "react-redux";

import Location from "./Location";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";

import { fetchWeather } from "../store/actions";

const WeatherDashboard = props => {
  props.fetchWeather();
  return (
    <div className="weather-dashboard-container">
      <Location />
      <CurrentWeatherDetails />
      <CurrentForecast />
      <WeeklyForecast />
    </div>
  );
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
