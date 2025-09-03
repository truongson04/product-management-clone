const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
       title: String,
       description: String,
       category: String,
       price: Number,
       discountPercentage: Number,
       thumbnail: String,
       status: String,
       position: Number,
       deleted: Boolean,
       deletedAt: Date


    }
)
const Product = new mongoose.model("Product", productSchema, "products");
module.exports= Product;