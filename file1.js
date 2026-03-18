//////////////////// Lec 6 ////////////////////
const request = require("request");
const geocode = require("./file1/geocode");

const forcast = require("./file1/forcast");

 const address = process.argv[2];
geocode(address, (err, data) => {
  if (err) {
    return console.log("Error:", err);
  }

  console.log("Geocode Data:", data);

  forcast(data.longitude, data.latitude, (err, forecastData) => {
    if (err) {
      return console.log("Error:", err);
    }

    console.log("Forecast Data:", forecastData);
  });
});
