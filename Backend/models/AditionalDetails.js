const mongoose = require("mongoose");

const additionalDetails = new mongoose.Schema({
    contactNumber:{
        type:Number,
        trim:true,
    },
    gender: {
		type: String,
	},
	dateOfBirth: {
		type: String,
	},
	about: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model("additionalDetails",additionalDetails)