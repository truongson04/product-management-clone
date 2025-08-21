const mongoose = require("mongoose")
module.exports.connect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("You can use the database now");

    }
    catch(err){
        console.log(err);
    }
}