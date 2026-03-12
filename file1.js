//////////////////// Lec 4 ////////////////////

///////////////////////////////////////
const fs = require("fs");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers"); // to hide the first two arguments (node and file name) from the command line arguments

const argv = yargs(hideBin(process.argv));

const Functions = require("./Functions"); // to import the functions from the Functions.js file

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
  handler: (
    x // the handler function that will be executed when the command is called
  ) => {
    Functions.add(x.fname, x.lname, x.age, x.city, x.id);
  },
});
///////////////////////////////////////////////////// delete command //////////////////////////////////////////////////
argv.command({
  command: "delete",
  describe: "delete a new note",
  builder: {
    id: {
      describe: "ID",
      demandOption: true,
    },
    // fname: {
    //   describe: "First name",
    //   demandOption: true,
    // }, // to specify the options that the command accepts, it takes an object where the keys are the option names and the values are objects that describe the options, in this case, it has two options: id and fname, where id is not required and fname is required
  },
  handler: (
    x // the handler function that will be executed when the command is called
  ) => {
    Functions.delete(x.id);
  },
});

///////////////////////////////////////////////////// reade command //////////////////////////////////////////////////
argv.command({
  command: "reade",
  describe: "reade a new note",
  builder: {
    id: {
      describe: "ID",
      demandOption: true,
    },
  },
  handler: (
    x // the handler function that will be executed when the command is called
  ) => {
    Functions.readedate(x.id);
  },
});

////////////////////////////////////////////////////// labled command //////////////////////////////////////////////////
argv.command({
  command: "labled",
  describe: "labled a new note",
  handler: (
    x // the handler function that will be executed when the command is called
  ) => {
    Functions.labled();
  },
});
argv.argv; // to parse the command line arguments and execute the corresponding command
