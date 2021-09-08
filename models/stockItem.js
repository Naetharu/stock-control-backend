const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Order", "Stock", "Build", "Ready", "Deployed", "Scrapped"],
  },
  contract: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  serial: {
    type: String,
    required: false,
  },
  asset: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    min: "2020-01-01",
    max: "2100-01-01",
    required: false,
  },
});

StockItemSchema.virtual("url").get(() => {
  return "/stock/" + this._id;
});

module.exports = mongoose.model("StockItem", StockItemSchema);
