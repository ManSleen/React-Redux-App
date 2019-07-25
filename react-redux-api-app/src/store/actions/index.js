import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchWeather = () => dispatch => {
  window.addEventListener("load", () => {
    let long, lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        localStorage.setItem("coords", long, lat);
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/a28fc69c06cc216bcb966fb72aa9ba18/${lat},${long}`;

        dispatch({ type: FETCH_DATA_START });
        axios
          .get(api)
          .then(res => {
            console.log(res);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  });
};
