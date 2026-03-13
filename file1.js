//////////////////// Lec 5 ////////////////////
const request = require("request");
const url =
  "http://api.weatherapi.com/v1/current.json?key=65f2598868c24b6d8cf153726261203&q=Palestine&aqi=no";

request({ url, json: true }, (err, response) => {
  if (err) {
    console.log("Error Page");
  } else if (response.body.error) {
    //check if the API response contains an error
    console.log(response.body.error.message); //display the error message from the API response
  } else {
    console.log(response.body.location.name); //display the location name
    console.log(response.body.current.temp_c); //display the current temperature in Celsius
    console.log(response.body.current.condition.text); //display the weather condition
  }
});
