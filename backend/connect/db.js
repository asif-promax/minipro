const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected");
  } catch (error) {
    console.error(`error:${error.message}`);
    // process.exit(1)
  }
};
