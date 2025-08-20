const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT; 
const route = require("./routes/client/index.route")

const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/productData')
const Product = mongoose.model('Product', {
    title: String, 
    price: Number, 
    thumbnail: String, 
})
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"))
route(app);

app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
})