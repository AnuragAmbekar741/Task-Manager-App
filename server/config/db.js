const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const dbUrl = process.env.MONGO_DB_URL;
    if (dbUrl) {
      await mongoose.connect(dbUrl);
      console.log("DB connection successful");
    } else {
      throw new Error("No DB URL provided");
    }
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

module.exports = connectToDb;
