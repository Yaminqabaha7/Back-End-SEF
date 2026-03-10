//////////////////// Lec 3 ////////////////////

///////////////////////////////////////
const fs = require("fs");

const yamin = {
  name: "Yamin",
  age: 25,
};

console.log(yamin);

const yaminString = JSON.stringify(yamin); /// converts object to string(json format)

console.log(yaminString);

const yaminParsed = JSON.parse(yaminString); /// converts string(Json) back to object
console.log(yaminParsed);

fs.writeFileSync("yamin.json", yaminString); /// writes the string(json) to a file

//////////////////////////////////////////////////////////////

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");// to hide the first two arguments (node and file name) from the command line arguments

const argv = yargs(hideBin(process.argv));

const Functions = require("./Functions");// to import the functions from the Functions.js file

argv.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    fname: {
      describe: "First name",
      demandOption: true,
    },
    lname: {
      describe: "Last name",
      demandOption: true,
    },
  },
  handler: (x) =>// the handler function that will be executed when the command is called
   {
    Functions.add(x.fname, x.lname, x.age, x.city);
  },
});

console.log(argv.argv); // to parse the command line arguments and execute the corresponding command