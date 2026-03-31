//////////////////// Lec 7 ////////////////////
const express = require("express");
const app = express();


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 

app.get("/profile", (req, res) => {
  res.send("This is the profile page");
}); 

app.get("/page", (req, res) => {
  res.send({
    name: "John Doe",
    age: 30,
    email: " yamin  @example.com"
  });
}); 
//////////////////////////////////
const path = require("path");
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});