const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.get("/", stockController.get_stock_all);
router.get("/:id", stockController.get_stock_one);

module.exports = router;
