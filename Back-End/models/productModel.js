import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:Array, required:true},
    category: {type:String, required:true},
    gender: {type:String, required:true},
    location: {type:String, required:true},
    contact: {type:Number, required:true},
    age: {type:String, required:true},
    breed: {type:String, required:true},
    date: {type:Number, required:true}
})

const productModel =  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;