
const mongoose = require("mongoose");
const generate = require("../helper/generateRandom");
const accountSchema = new mongoose.Schema(
    {
       fullName:String,
       email:String,
       password:String,
       token:{
        type:String,
        default:generate.generateRandomString(20),
       },
       phone:String,
       password:String,
       avatar:String,
       role_id:String,
       status:String,
       deleted: {
        type: Boolean,
        default: false
       },
       deletedAt: Date


    }, {
        timestamps:true
    }
)
const Account = new mongoose.model("Account", accountSchema, "accounts");
module.exports= Account;