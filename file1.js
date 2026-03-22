//////////////////// Task 1 ////////////////////


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
    x, // the handler function that will be executed when the command is called
  ) => {
    Functions.add(x.fname, x.lname, x.age, x.city, x.id);
  },
});

///////////////////////////////////////////////////// reade command //////////////////////////////////////////////////
argv.command({
  command: "readedate",
  describe: "reade a new note",
  builder: {
    id: {
      describe: "ID",
      demandOption: true,
    },
  },
  handler: (
    x, // the handler function that will be executed when the command is called
  ) => {
    Functions.readedate(x.id);
  },
});

argv.command({
  command: "readAll",
  describe: "reade all notes",

  handler: () => {
    Functions.readAll();
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
  },
  handler: (x) => {
    Functions.delete(x.id);
  },
});

argv.command({
  command: "deleteAll",
  describe: "delete all notes",
  handler: () => {
    Functions.deleteAll();
  },
});


////////////////////////////////////////////////////// labled command //////////////////////////////////////////////////
argv.command({
  command: "readSpecific",
  describe: "read specific notes",
  handler: () => {
    Functions.readSpecific();
  },
});

argv.argv; // to parse the command line arguments and execute the corresponding command
