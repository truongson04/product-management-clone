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
module.exports.getEdit = async(req, res)=>{
    try{
        const id = req.params.id;
 let find ={
    _id:id,
    deleted:false
 }
 const role = await Roles.findOne(find)

 res.render("admin/pages/roles/edit.pug", {
    pageTitle:"Edit role", 
    data:role
 });

    }
    catch(err){
      res.redirect("/admin/roles")
    }
 
}
module.exports.editRole= async (req, res)=>{
  try{
  const id = req.params.id;

 await Roles.updateOne({_id:id}, req.body);
  req.flash("success", "Update successfully")
 res.redirect("/admin/roles")
  }
  catch(err){
    req.flash("error", 'Something went wrong')
   res.redirect("/admin/roles")
  }
}
module.exports.getPermission = async(req, res)=>{
    let find ={
        deleted:false
    }
    const role = await Roles.find(find);
    res.render("admin/pages/roles/permission", {
        pageTitle:"Permission assignment",
        records:role
    })
}
module.exports.updatePermissions = async (req, res)=>{

const permissions = JSON.parse(req.body.permissions);
permissions.forEach( async (items)=>{
    await Roles.updateOne({_id:items.id}, {permissions: items.permissions});
})
req.flash("success", "Update successfully !");
res.redirect("/admin/roles/permission");
}