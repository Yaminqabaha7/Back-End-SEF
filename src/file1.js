//////////////////// Lec 8 ////////////////////
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


//////////////////////////////////

const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));//accessing the public folder

//////////////////////////////////

app.set("view engine", "hbs");//setting up the view engine

//////////////////////////////////

const Pagespath = path.join(__dirname, "../Pages/views");
app.set("views", Pagespath);//accessing the views folder

//////////////////////////////////

const hbs = require("hbs");
const PartialsPath = path.join(__dirname, "../Pages/Partials");
hbs.registerPartials(PartialsPath);//accessing the partials folder

//////////////////////////////////

app.get("/", (req, res) => {
  res.render("index", {
    title: "Yamin's App - Home Page",
    name: "John Doe",
  });
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    title: "Yamin's App - Profile Page",
    location: "pakistagfhn",
    img: "images/1.jpeg",
  });
});

app.get("/views", (req, res) => {
  res.render("views", {
    title: "Yamin's App - Views Page",
    name: "yamin qabaha",
    img: "images/1.jpeg",
  });
});
//////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});//this is the code to start the server and listen on the specified port


// app.get("/data", (req, res) => {
//   res.send("Hello World!");
// });

// // app.get("/profile", (req, res) => {
// //   res.send("This is the profile page");
// // });

// // app.get("/page", (req, res) => {
// //   res.send({
// //     name: "John Doe",
// //     age: 30,
// //     email: " yamin  @example.com"
// //   });
// // });