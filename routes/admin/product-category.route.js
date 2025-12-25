const express = require("express");
const router = express.Router();
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

const productCategoryController = require("../../controllers/admin/productCategory.controller");
router.get("/", productCategoryController.index);
router.get("/create", productCategoryController.getCreate);
router.post("/create", upload.single("thumbnail") , uploadCloud.upload,productCategoryController.createCategory);
router.get("/edit/:id", productCategoryController.getEditCategory);
router.patch("/edit/:id", upload.single("thumbnail") , uploadCloud.upload, productCategoryController.editCategory)

module.exports= router;