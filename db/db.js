const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to Mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDB`);
  }
};

module.exports = connectDB;
