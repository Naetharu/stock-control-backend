const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

// Create
router.post("/");

// Read
router.get("/", stockController.get_stock_all);
router.get("/:id", stockController.get_stock_one);

// Update

// Delete

module.exports = router;
