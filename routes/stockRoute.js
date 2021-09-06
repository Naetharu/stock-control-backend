const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.post("/", stockController.create_stock_item);
router.get("/", stockController.get_stock_all);
router.get("/:id", stockController.get_stock_item);
router.put("/:id", stockController.update_stock_item);
router.delete("/:id", stockController.delete_stock_item);

module.exports = router;
