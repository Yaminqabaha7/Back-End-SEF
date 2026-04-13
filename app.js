const { MongoClient, ObjectId } = require('mongodb');; // 1. Import the MongoClient class from the mongodb package

const url = "mongodb://localhost:27017"; // 2. Define the connection URL for the MongoDB server

const client = new MongoClient(url); // 3. Create a new MongoClient instance using the connection URL

const dbName = "myDatabase"; // 4. Define the name of the database you want to use

async function adduser() {
  // 5. Define an asynchronous function to perform database operations
  try {
    await client.connect(); // connect to the MongoDB server
    console.log("Connected successfully to server");
    const db = client.db(dbName); //get a reference to the specified database

    const users = db.collection("users"); // create a reference to the "users" collection within the database

    const insertResult = await users.insertOne({
      name: "John Doe",
      email: "john.doe@example.com",
    }); // Insert a new document into the "users" collection with the specified name and email fields

    console.log("Inserted document:", insertResult.insertedId); // Log the ID of the inserted document to the console

    // addnewuser(users); // Call the addnewuser function to insert another user document into the collection

    // addmany(users); // Call the addmany function to insert multiple user documents into the collection

      findusers(users,'69dccfed28ceaa7f80af38ac'); // Call the findusers function to find a document in the collection by its _id field
  } catch (err) {
    console.error("Error:", err);
  }
}
adduser();
//////////////////////////////
async function addnewuser(users) {
  const insertResult = await users.insertOne({
    name: "yamin qabaha",
    email: "yamin.qabaha@example.com",
  }); // Insert a new document into the "users" collection with the specified name and email fields

  console.log("Inserted document:", insertResult.insertedId); // Log the ID of the inserted document to the console
} // Define an asynchronous function to insert another user document into the "users" collection .

///////////////////////////////////////////////////////////////////

async function addmany(users) {
  const insertmany = await users.insertMany([
    { name: "Alice Smith", email: "alice@email" },
    { name: "Bob Johnson", email: "bob@email" },
    { name: "Charlie Brown", email: "charlie@email" },
  ]); // Insert multiple documents into the "users" collection using the insertMany method
  console.log("Inserted number of documents:", insertmany.insertedCount); // Log the number of documents that were inserted to the console
}// Define an asynchronous function to insert multiple user documents into the "users" collection using the insertMany method.

////////////////////////////////////////////////////////////////////

async function findusers(users,id) {
  const findResult = await users.findOne({ _id: new ObjectId(id) }); // Find a single document in the "users" collection that matches the specified _id field
  if (!findResult) {
    console.log("No document found with _id:", id); // Log a message to the console if no document was found with the specified _id
    return;
  }
  console.log("Found document:", findResult); // Log the found document to the console
} // Define an asynchronous function to find a document in the "users" collection by its _id field.
