
const productCategory = require("../../models/product-category.model");
const helper = require("../../helper/createTree");
module.exports.index= async (req, res)=>{
    let find={
        deleted:false,
    }
    const categories = await productCategory.find(find);
    const listTree = helper.createTree(categories)
res.render("admin/pages/product-category/index.pug", {
    pageTitle:"Product's categories",
    list : listTree,
});
}
module.exports.getCreate = async (req, res)=>{
    let find ={
        deleted:false,
    }
    const list = await productCategory.find(find).sort({position:"desc"});
    const newRecords = helper.createTree(list);
    
    
   res.render("admin/pages/product-category/create.pug", {
    pageTitle:"New category", 
    list: newRecords
   })

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