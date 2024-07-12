
const mongoose = require("mongoose");
// const mailSender = require("../mailsender/mailSender")
const mailSender = require("../mailsender/mailSend");


const OtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5,   
	},
});

async function sendverifactionEmail(email,otp){

    try{
        const mailResponse = await mailSender(
            email,
            "Verification Email",
            otp,
        );
        // console.log("Email sent successfully: ", mailResponse);
    }catch(error){
        console.log("Error occurred while sendig email :", error);
        throw error
    }

}

OtpSchema.pre("save", async function(next) {
    console.log("New document saved to database");
    if(this.isNew){
        await sendverifactionEmail(this.email, this.otp);
    }
    next();
});

const Otp = mongoose.model("OTP",OtpSchema);
module.exports = Otp;