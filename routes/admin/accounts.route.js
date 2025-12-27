const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/account.controller");
const multer = require('multer');
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });
router.get("/", controller.index);
router.get("/create", controller.getCreate);
router.post("/create", upload.single("thumbnail") , uploadCloud.upload,controller.addNewAccount);
module.exports=router;