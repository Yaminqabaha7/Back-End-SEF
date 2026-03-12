const fs = require("fs");

const add = (fname, lname, age, city, id) => {
  const data = loadData();
  const duplicate = data.find((item) => item.id === id); // to check if the id already exists in the data array, it returns the first item that matches the condition or undefined if no item matches
  if (!duplicate) {
    // if the id does not exist, it adds the new item to the data array and saves it to the file
    data.push({
      fname,
      lname,
      age,
      city,
      id,
    });
    saveData(data);
  } else {
    console.log("ID already exists");
  }
};
///////////////////////////////////////////////

const deleteItem = (id) => {
  const data = loadData();
  const newData = data.filter((item) => item.id !== id); // to create a new array that contains all the items except the one with the specified id

  saveData(newData);

  console.log("Item deleted"); // to save the new array to the file and print a message to the console
};

// const deleteItem = (fname) => {
//   const data = loadData();
//   const newData = data.filter((item) => item.fname !== fname); // to create a new array that contains all the items except the one with the specified id

//   saveData(newData); // to save the new array to the file, it will overwrite the existing data in the file

//   console.log("Item deleted"); // to log a message to the console to indicate that the item has been deleted
// };

///////////////////////////////////////////////

const readedate = (id) => {
  const data = loadData();
  const item = data.find((item) => item.id === id); // to find the item with the specified id in the data array, it returns the first item that matches the condition or undefined if no item matches
  if (item) {
    console.log(item); // to log the item to the console if it exists or log a message if it does not exist
  } else {
    console.log("Item not found");
  }
};
///////////////////////////////////////////////

const labled = () => {
  const data = loadData();
  data.forEach((item) => {
    console.log(
      `First name: ${item.fname}, Last name: ${item.lname}, Age: ${item.age}, City: ${item.city}, ID: ${item.id}`
    ); // to log each item in the data array to the console in a formatted way
  });
};

///////////////////////////////////////////////
const loadData = () => {
  try {
    const dataBuffer = fs.readFileSync("data.json").toString();
    return JSON.parse(dataBuffer);
  } catch {
    return [];
  }
}; // to load the data from the file and parse it to an array of objects, if the file does not exist or is empty, it returns an empty array

const saveData = (data) => {
  const dataString = JSON.stringify(data);
  fs.writeFileSync("data.json", dataString);
}; // to convert the array of objects to a string and write it to the file

module.exports = {
  add,
  delete: deleteItem,
  readedate,
  labled,
};
