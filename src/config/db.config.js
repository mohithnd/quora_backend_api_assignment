const mongoose = require("mongoose");
const { MONGODB_URI } = require("./server.config");

async function connectToDb() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (err) {
    console.log("Unable To Connect To The DB Server:-");
    console.log(err);
  }
}

module.exports = connectToDb;
