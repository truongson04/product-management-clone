const express = require("express");
const router = express.Router();
const productControllers = require("../../controllers/admin/products.controller");
router.get("/", productControllers.index);
module.exports= router;