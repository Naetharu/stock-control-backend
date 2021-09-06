const express = require("express");
const router = express.Router();
const dashController = require("../controllers/dashboardController");

router.get("/", dashController.get_stock_numbers);

module.exports = router;
