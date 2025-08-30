const express = require('express');
const methodOverride = require('method-override')
const app = express();
app.use(methodOverride('_method'))
require("dotenv").config();
const port = process.env.PORT; 
const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")

const database = require("./config/database");
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"))
route(app);
routeAdmin(app);

app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
})