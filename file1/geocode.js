const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw";

  request({ url, json: true }, (err, response) => {
    if (err) {
      callback("Error in connection", undefined);
    } else if (response.body.message) {
      //check if the API response contains an error
      callback(response.body.message, undefined);
    } else if (response.body.features.length === 0) {
      callback("Location not found", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
