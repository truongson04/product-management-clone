module.exports = (app)=>{
    const productRouters= require("./product.route")
    const homeRouters = require("./home.route");
    app.use("/", homeRouters);
app.use("/products", productRouters);
}