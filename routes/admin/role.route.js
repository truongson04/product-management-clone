const express= require("express");
const router = express.Router();
const roleControllers = require("../../controllers/admin/role.controller");
router.get("/", roleControllers.index);
router.get("/create", roleControllers.getNewRole)
router.post("/create", roleControllers.createRole)
router.get("/edit/:id", roleControllers.getEdit);
router.patch("/edit/:id", roleControllers.editRole)
router.get("/permission", roleControllers.getPermission)
router.patch("/permissions", roleControllers.updatePermissions);
module.exports= router
