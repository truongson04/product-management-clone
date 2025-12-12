const Product = require("../../models/product.models")
module.exports.index= async(req, res)=>{
const products =   await Product.find({deleted : false}) .sort({position:"desc"});

    res.render("client/pages/products/index", {
        pageTitle: "Product Page",
        products: products
    })


}
module.exports.getDetails= async (req, res)=>{
try{
  const find ={
    deleted: false,
    _id: req.params.id
  }
  const product = await Product.findOne(find);
  
  res.render("client/pages/products/details", {
    pageTitle: product.title,
    product:product
  })
 
}
 catch(err){
    res.redirect("/products")
  }

}
