const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
    name:String,
    price:Number
})

module.exports=mongoose.model("products",Product)