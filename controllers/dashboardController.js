const StockItem = require("../models/stockItem");
const async = require("async");

const service_stock_numbers = (items) => {
  let result = {
    Order: 0,
    Stock: 0,
    Build: 0,
  };

  for (const [key, value] of Object.entries(items)) {
    if (value.status === "Order") {
      result.Order++;
    } else if (value.status === "Stock") {
      result.Stock++;
    } else if (value.status === "Build") {
      result.Build++;
    }
  }

  console.log("Updated numbers", [result.Order, result.Stock, result.Build]);

  return result;
};

exports.get_stock_numbers = (req, res) => {
  StockItem.find({}, "status")
    .then((item) => {
      return service_stock_numbers(item);
    })
    .then((item) => {
      res.json({ item });
    })
    .catch((err) => {
      console.error("Error in Dashboard Controller: ", err);
    });
};
