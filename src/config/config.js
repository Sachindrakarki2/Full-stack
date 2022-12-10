import mongoose from "mongoose";

export const connectDb = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/user_crud";
    const conn = mongoose.connect(mongoUrl);
    conn
      ? console.log("mongo Connected!")
      : console.log("Unable to connect mongo");
  } catch (error) {
    console.error(error);
  }
};
