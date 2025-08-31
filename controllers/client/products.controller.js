const Product = require("../../models/product.models")
module.exports.index= async(req, res)=>{
const products =   await Product.find({});

    res.render("client/pages/products/index", {
        pageTitle: "Product Page",
        products: products
    })


}
