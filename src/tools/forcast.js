const request = require("request");

const forcast = (lanitued, longtude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=65f2598868c24b6d8cf153726261203&q=" +
    lanitued +
    "," +
    longtude +
    "&aqi=no";

  request({ url, json: true }, (err, response) => {
    if (err) {
      callback("Error in connection", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temp_c}°C with ${response.body.current.condition.text}`,
      );
    }
  });
};

module.exports = forcast;
