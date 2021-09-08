const StockItem = require("../models/stockItem");

// Create
exports.create_stock_item = (req, res) => {
  const { name, status, contract, location, serial, asset, dueDate } =
    req.body.item;

  console.log("inside the dashboard controller: ", req.body.item);

  const newItem = new StockItem({
    name: name,
    status: status,
    contract: contract,
    location: location,
    serial: serial,
    asset: asset,
    dueDate: dueDate,
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
  let currentStatus = req.body.item.status;
  let choice = {};

  switch (currentStatus) {
    case "Order":
      choice = { status: "Stock" };
      break;
    case "Stock":
      choice = { status: "Build" };
      break;
    case "Build":
      choice = { status: "Ready" };
      break;
    case "Ready":
      choice = { status: "Deployed" };
      break;
    case "Deployed":
      choice = { status: "Stock" };
      break;
    default:
      choice = { status: "Stock" };
      break;
  }

  StockItem.findByIdAndUpdate(
    req.params.id,
    { status: choice.status },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("Update done: ", data);
    }
  );
  res.json({ msg: "completed update" });
};

// Delete
exports.delete_stock_item = (req, res) => {
  StockItem.deleteOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      console.log(err);
    }
    res.json({ msg: "Item Deleted" });
  });
};
