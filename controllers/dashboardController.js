const StockItem = require("../models/stockItem");
const async = require("async");

exports.get_stock_numbers = (req, res) => {
  // This should be async paralell?

  let answer = {
    compStock: 0,
    compOrder: 0,
    compBuild: 0,
  };

  StockItem.find({ status: "Stock" }).exec((err, build_list) => {
    if (err) {
      console.log(err);
    }
    console.log("stock: ", build_list.length);

    let check = build_list.length;

    answer.compStock = check;

    console.log(answer);

    res.json({ result: answer });
  });
};
