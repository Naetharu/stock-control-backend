const StockItem = require("../models/stockItem");
const async = require("async");

let stockNumbers = {
  computers: {
    cOrder: 0,
    cStock: 0,
    cBuild: 0,
  },
  tablets: {
    tOrder: 0,
    tStock: 0,
    tBuild: 0,
  },
  phones: {
    pOrder: 0,
    pStock: 0,
    pBuild: 0,
  },
};

exports.get_stock_numbers = async (req, res) => {
  await StockItem.find({ status: "Build" }, (err, results) => {
    if (err) {
      console.error(err);
      res.json({ msg: err });
    }
    stockNumbers.computers.cBuild = results.length;
  });
};
