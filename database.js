const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_DB);
  console.log("The dataBase work fine ^_^");
};

module.exports = connectDB;
