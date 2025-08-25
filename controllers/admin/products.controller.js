const Product = require("../../models/product.models")
module.exports.index= async (req, res)=>{
    const productList = await Product.find({});
    console.log(productList);
    res.render( "admin/pages/products/index.pug", {
        pageTitle: "Product Management",
        products : productList
    })
}