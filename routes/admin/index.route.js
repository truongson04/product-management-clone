const dashboardRoutes= require("./dashboard.route")
const productRoutes = require("./product.route")
const productCategoryRoutes = require("./product-category.route");
module.exports = (app)=>{
app.use("/admin/dashboard", dashboardRoutes)
app.use("/admin/products", productRoutes)
app.use("/admin/product-category", productCategoryRoutes);
}