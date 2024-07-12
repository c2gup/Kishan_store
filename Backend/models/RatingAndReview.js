const mongoose = require("mongoose");

const ratingAndReviewsSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    },
    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Product",
        index:true,
    },
});

module.exports = mongoose.model("RatingAndReview",ratingAndReviewsSchema);
