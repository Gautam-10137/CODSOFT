const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    category:{type:String, required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}

})

module.exports=mongoose.model('Product',ProductSchema);