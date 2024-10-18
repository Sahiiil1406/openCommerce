const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};

module.exports = {
  connectToDatabase,
};
