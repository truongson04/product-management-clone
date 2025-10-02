const express = require('express');
const flash = require('express-flash')
const methodOverride = require('method-override')
const cookieParser= require("cookie-parser")
const session = require("express-session")
const bodyParser = require('body-parser')
const app = express();
app.use(methodOverride('_method'))
require("dotenv").config();
const port = process.env.PORT; 
const route = require("./routes/client/index.route")
const routeAdmin = require("./routes/admin/index.route")
const database = require("./config/database");
database.connect();
app.use(bodyParser.urlencoded({extended:false}))
//flash 
 app.use(cookieParser('keyboard cat'));
  app.use(session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"))
route(app);
routeAdmin(app);

app.listen(port, ()=>{
    console.log(`The server is running at ${port}`)
})