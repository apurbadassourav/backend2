const mongoose = require('mongoose');
const { Schema } = mongoose;

const football=new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
module.exports=mongoose.model("Football",football)