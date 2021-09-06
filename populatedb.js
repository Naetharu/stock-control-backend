console.log("this is a script to auto-populate some data into our db");
require("dotenv").config();

//Part 1:  get a connection to the db
const async = require("async");

const StockItem = require("./models/stockitem");

const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_DB;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error with mongoose connection"));

//Part 2: Auto-Generate some Data
let itemArray = [];

const createItem = (
  i_name,
  i_status,
  i_contract,
  i_location,
  i_serial,
  i_asset,
  callback
) => {
  let item = new StockItem({
    name: i_name,
    status: i_status,
    contract: i_contract,
    location: i_location,
    serial: i_serial,
    asset: i_asset,
  });

  item.save((err) => {
    if (err) {
      callback(err, null);
    }
    console.log("New Item: " + item);
    itemArray.push(item);
    callback(null, item);
  });
};

// Part 3: Calling the creation function

const sampleItems = (cb) => {
  async.parallel(
    [
      (callback) => {
        createItem(
          "Dell 5520",
          "Stock",
          "EH",
          "VH",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Dell 5520",
          "Order",
          "CEH",
          "Brunswick",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Dell Docking Station",
          "Deployed",
          "TFB",
          "Griffin Lane",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Active Tab 2",
          "Deployed",
          "CBC",
          "Sandy",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Samsung A12",
          "Build",
          "EH",
          "VH",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Samsung A71",
          "Ready",
          "EH",
          "VH",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Microsoft Surface Pro 7",
          "Order",
          "Corp",
          "VH",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Samsung Active Tab 3",
          "Order",
          "EH",
          "Springfield",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Dell 5410",
          "Deployed",
          "EH",
          "VH",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
      (callback) => {
        createItem(
          "Dell 5550",
          "Scrapped",
          "CBC",
          "Thorn Turn",
          "SR" + Math.floor(Math.random() * 1000),
          "RJ" + Math.floor(Math.random() * 1000),
          callback
        );
      },
    ],
    cb
  );
};

async.series([sampleItems], (err) => {
  if (err) {
    console.log("Final Err: ", err);
  } else {
    console.log("Creation Complete");
  }
  db.close();
});
