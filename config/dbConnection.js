const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect("mongodb://localhost:27017/testing", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
