const express = require("express");
const router = express.Router();
const productControllers = require("../../controllers/admin/products.controller");
router.get("/", productControllers.index);
router.patch("/change-status/:page/:status/:id", productControllers.changeStatus);
module.exports= router;