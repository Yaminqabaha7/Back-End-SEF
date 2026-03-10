//////////////////// Lec 2 ////////////////////

const validator = require("validator");

console.log(validator.isEmail("yamin")); // false

console.log(validator.isEmail("yamin@gmail.com")); // true

/////////////////////////////////////////////////////////

console.log(process.argv); // path to node, path to file, arguments

console.log(process.argv[2]); // first argument

const comm = process.argv[2];
if (comm === "yamin") {
  console.log("Welcome Yamin");
} else if (comm === "sami") {
  console.log("Welcome Sami");
} else {
  console.log("Welcome Guest");
}
/////////////////////////////////////////////////////////

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv));

// argv.command({
//   command: "add",
//   describe: "Add a new note",
//   builder: {
//     fname: {
//       describe: "First name",
//       demandOption: true,
//     },
//     lname: {
//       describe: "Last name",
//       demandOption: true,
//     },
//   },
//   handler: () => {
//     console.log("Adding a new note!");
//   },
// });

// argv.parse();

argv
  .command({
    command: "remove",
    describe: "Remove a note",
    builder: {
      id: {
        describe: "Note ID",
        demandOption: true,
      },
    },
    handler: () => {
      console.log("Removing a note!");
    },
  })
  argv.parse();
