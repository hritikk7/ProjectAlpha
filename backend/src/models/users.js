import mongoose, { Schema } from "mongoose";
import { z } from 'zod';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("User", userSchema);
