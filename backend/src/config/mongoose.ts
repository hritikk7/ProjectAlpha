import { config } from "dotenv";
import mongoose from "mongoose";

const MONGO_DB_UIR = process.env.DATABASE_URL;

export const connectDb = async () => {
  try {
    mongoose
      .connect(MONGO_DB_UIR)
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

