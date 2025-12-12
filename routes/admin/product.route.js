const express = require("express");
const multer = require('multer');
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})
// Save uploaded image
const upload = multer({ storage: storage })
const productControllers = require("../../controllers/admin/products.controller");
router.get("/", productControllers.index);
router.patch("/change-status/:page/:status/:id", productControllers.changeStatus);
router.patch("/change-multi", productControllers.changeMulti);
router.delete("/delete/:page/:id", productControllers.deleteItem);
router.get('/create', productControllers.createItem)
router.post("/create", upload.single("thumbnail"),productControllers.createProducts)
router.get("/edit/:id", productControllers.editItem);
router.patch("/edit/:id", upload.single("thumbnail"),productControllers.editProduct)
router.get("/details/:id", productControllers.getDetails);
module.exports= router;