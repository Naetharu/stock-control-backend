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
});

StockItemSchema.virtual("url").get(() => {
  return "/stock/" + this._id;
});

module.exports = mongoose.model("StockItem", StockItemSchema);
