const mongoose = require("mongoose")
module.exports.connect= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            family: 4,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000
        });
        console.log("You can use the database now");

    }
    catch(err){
        console.log(err);
    }
}