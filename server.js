const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Connection to mongoose data base
const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_DB;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose connection error"));

// Configuration of express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection to routes
app.use("/stock/", require("./routes/stockRoute"));
// Run app

app.listen(5000, () => {
  console.log("listening on port 5000");
});
