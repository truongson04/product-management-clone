const express = require("express");
const multer = require('multer');
const router = express.Router();
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
// upload file
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, uniqueSuffix + '-' + file.originalname)
//   }
// })
// Save uploaded image

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const productControllers = require("../../controllers/admin/products.controller");
router.get("/", productControllers.index);
router.patch("/change-status/:page/:status/:id", productControllers.changeStatus);
router.patch("/change-multi", productControllers.changeMulti);
router.delete("/delete/:page/:id", productControllers.deleteItem);
router.get('/create', productControllers.createItem)
router.post("/create", upload.single("thumbnail") , uploadCloud.upload, productControllers.createProducts)
router.get("/edit/:id", productControllers.editItem);
router.patch("/edit/:id", upload.single("thumbnail"), uploadCloud.upload,productControllers.editProduct)
router.get("/details/:id", productControllers.getDetails);
module.exports= router;