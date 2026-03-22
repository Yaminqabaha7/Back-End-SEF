//////////////////// Task-2 ////////////////////
const request = require("request");
const geocode = require("./file1/geocode");

const forcast = require("./file1/forcast");

const address = process.argv[2];

if (!address) {
  return console.log(" Please provide a country name!");
}

geocode(address, (err, geoData) => {
  if (err) {
    return console.log(" Geocode Error:", err);
  }

  forcast(geoData.longitude, geoData.latitude, (err, weatherData) => {
    if (err) {
      return console.log(" Forecast Error:", err);
    }

    console.log("\n Country:", address);
    console.log(" Longitude:", geoData.longitude);
    console.log(" Latitude:", geoData.latitude);
    console.log(" Temperature:", weatherData.temperature + "°C");
  
  });
});
