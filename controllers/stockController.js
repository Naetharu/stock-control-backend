// Create
const StockItem = require("../models/stockItem");

exports.create_stock_item = (req, res) => {
  StockItem.find()
    .sort({ assent: 1 })
    .exec((err, item_list) => {
      console.error(err);
    });
  res.json({ result: item_list });
};

// Read
exports.get_stock_all = (req, res) => {
  res.send("finding all stock items");
};

exports.get_stock_one = (req, res) => {
  res.send("finding one stock item");
};

// Update
exports.update_stock_item = (req, res) => {
  res.send("updating stock item");
};

// Delete
exports.delete_stock_item = (req, res) => {
  res.send("deleteing stock item");
};
