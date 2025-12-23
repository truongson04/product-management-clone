
const productCategory = require("../../models/product-category.model");
module.exports.index= async (req, res)=>{
    let find={
        deleted:false,
    }
    const categories = await productCategory.find(find);
res.render("admin/pages/product-category/index.pug", {
    pageTitle:"Product's categories",
    list : categories,
});
}
module.exports.getCreate = async (req, res)=>{
   res.render("admin/pages/product-category/create.pug")

}
module.exports.createCategory = async (req, res)=>{
   if(!req.body.position){
    const count = await productCategory.countDocuments();
    req.body.position= count+1;
   }
   else{
    req.body.position = parseInt(req.body.position);
   }
   const category = new productCategory(req.body); 
   category.save();
   res.redirect("/admin/product-category");
   
}