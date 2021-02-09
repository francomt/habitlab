import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

interface UserModel extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  coins: number;
}

const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email already in use"],
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please confirm password"],
  },
});
