import mongoose from 'mongoose';
const { Schema } = mongoose;

const Product = new Schema({
    name:"Billetera",
    price:"53.2"
})

module.exports=mongoose.model("products",Product)