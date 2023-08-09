const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the Product Name"]
    },
    company:{
        type: String,
        values:["apple","samsung","dell","nokia","asus","lenova","rolex"],
       
    },
    price:{
        type : Number,
       
    },
    colors:{
        type:Array,
        default:"white"
    },
    image:{
        type:String,
    },
    description:{
        type:String,
        
    },
    category:{
        type:String,
        enum:['mobile','laptop',"computer","accessories","watch"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    shipping:{
        type:Boolean,
        default:false,
    }
});

module.exports = mongoose.model("Product",productSchema);