const express= require("express");
const router = express.Router();
const roleControllers = require("../../controllers/admin/role.controller");
router.get("/", roleControllers.index);
router.get("/create", roleControllers.getNewRole)
router.post("/create", roleControllers.createRole)
module.exports= router
