//////////////////// Lec 9 ////////////////////
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//////////////////////////////////

const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath)); //accessing the public folder

//////////////////////////////////

app.set("view engine", "hbs"); //setting up the view engine

//////////////////////////////////

const Pagespath = path.join(__dirname, "../Pages/views");
app.set("views", Pagespath); //accessing the views folder

//////////////////////////////////

const hbs = require("hbs");
const PartialsPath = path.join(__dirname, "../Pages/Partials");
hbs.registerPartials(PartialsPath); //accessing the partials folder

//////////////////////////////////

const forcast = require("./tools/forcast");
const geocode = require("./tools/geocode");

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  } else {
    geocode(req.query.address, (err, data) => {
      if (err) {
        return res.send({
          error: err,
        });
      } else {
        forcast(data.latitude, data.longitude, (err, forecastData) => {
          if (err) {
            return res.send({
              error: err,
            });
          } else {
            res.send({
              forecast: forecastData,
              location: req.query.address,
            });
          }
        });
      }
    });
  }
});

app.get("/", (req, res) => {
 
  res.render("index", {
    name: "Yamin",
    header: "Weather App"
  });
});

app.get("/{*splat}", (req, res) => {
  res.send("404");
}); //this is to handle the 404 error for any route that is not defined
//////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); //this is the code to start the server and listen on the specified port
