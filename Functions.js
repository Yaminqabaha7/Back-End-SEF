const fs = require("fs");

const add = (fname, lname, age, city) => {
  const data = loadData();
  data.push({
    fname,
    lname,
    age,
    city,
  });
  saveData(data);
};


///////////////////////////////////////////////
const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json").toString();
    return JSON.parse(dataBuffer);
  } catch {
    return [];
  }
};// to load the data from the file and parse it to an array of objects, if the file does not exist or is empty, it returns an empty array



const saveData = (data) => {
  const dataString = JSON.stringify(data);
  fs.writeFileSync("data.json", dataString);
};// to convert the array of objects to a string and write it to the file


module.exports = {
  add,
};
