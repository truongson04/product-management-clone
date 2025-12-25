const Roles = require("../../models/roles.model");
module.exports.index= async (req, res)=>{
    const roles = await Roles.find({deleted:false});
    res.render("admin/pages/roles/index", {
        pageTitle:"Roles and permission",
        roles:roles
    })
}
module.exports.getNewRole = async (req, res)=>{
res.render("admin/pages/roles/create.pug", {
    pageTitle:"Create new role"
});
}
module.exports.createRole= async (req, res)=>{
 const roles = new Roles(req.body);
 roles.save();
 res.redirect("/admin/roles")
}