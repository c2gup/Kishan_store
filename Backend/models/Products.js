const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String
    },
    selar:{
         type:mongoose.Schema.ObjectId,
         required:true,
         ref:"user"
    },
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    status:{
        type:String,
        enum:["Draft","Published"],
    },
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
        },
    ],


});

module.exports = mongoose.model("Product", productSchema);