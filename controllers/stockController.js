const StockItem = require("../models/stockItem");

// Create
exports.create_stock_item = (req, res) => {
  const { name, status } = req.body;
  const newItem = new StockItem({
    name: name,
    status: status,
  });
  newItem.save((err) => {
    if (err) {
      console.log(err);
    }
    res.json({ msg: "item successfully added", ...newItem });
  });
};

// Read
exports.get_stock_all = (req, res) => {
  StockItem.find()
    .sort({ assent: 1 })
    .exec((err, item_list) => {
      if (err) {
        console.error(err);
      }
      res.json({ result: item_list });
    });
};

exports.get_stock_item = (req, res) => {
  StockItem.find({ _id: req.params.id }, (err, item) => {
    if (err) {
      console.log(err);
    }
    res.json({ result: item });
  });
};

// Update
exports.update_stock_item = (req, res) => {
  res.send("updating stock item");
};

// Delete
exports.delete_stock_item = (req, res) => {
  StockItem.deleteOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      console.log(err);
    }
    res.send("item deleted");
  });
};
