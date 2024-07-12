const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin", "Coustmor", "Selar"],
    },
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        },
    ],
    token:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
    additionalDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"additionalDetails",
    }


},{timestamps:true});

module.exports = mongoose.model("user",userSchema)