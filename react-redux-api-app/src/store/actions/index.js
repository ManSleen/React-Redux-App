import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";

export const fetchWeather = () => dispatch => {
  window.addEventListener("load", () => {
    let long, lat;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;

        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/a28fc69c06cc216bcb966fb72aa9ba18/${lat},${long}`;

        axios
          .get(api)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  });

  dispatch({ type: FETCH_DATA_START });
};
