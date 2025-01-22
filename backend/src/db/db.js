const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.DATABASE_URL;

const connectDb = async () => {
  try {
    mongoose
      .connect(mongodbUrl)
      .then(() => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log(err, "database connection failed");
      });
  } catch (err) {
    console.log(err, "database connection failed");
    process.exit(1)
  }
};

module.exports = connectDb;
