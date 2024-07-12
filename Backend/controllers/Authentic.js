const User = require("../models/User");
const OTP = require("../models/Otp");
const bcrypt = require("bcrypt");
const additionalDetails = require("../models/AditionalDetails");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

require("dotenv").config();

exports.signup = async (req,res) => {
    try{
        const {firstName,lastName,email,password,confirmPassword,accountType,otp,contactNumber} = req.body;

        if(!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !otp){
            return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
        }

        if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:"Password and Confirm Password do not match. Please try again.",
			});
		}

        const existiUser = await User.findOne({email});
		if (existiUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

        const response = await OTP.find({email}).sort({createdAt: -1}).limit(1);
        console.log("It is response", response);
        if(response.length === 0){
            return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }else if(otp !== response[0].otp){
            return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }

        const hashPassword = await bcrypt.hash(password,10);

        const profileDetails = await additionalDetails.create({
            gender: null,
			dateOfBirth: null,
			about: null,
			contactNumber: null,
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            contactNumber,
            password:hashPassword,
            accountType:accountType,
            additionalDetails:profileDetails,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});

      }  catch(error){
         console.log(error);
         return res.status(500).json({
            success:false,
            message: "User cannot be registered. Please try again.",
         })
    }
};

exports.sendOtp = async(req,res) => {
    try{
        const {email} = req.body;

        const checkUserPresent = await User.findOne({email});
         
        if(checkUserPresent){
                return res.status(401).json({
                    success: false,
                    message: `User is Already Registered`,
                });
            
        }

        var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});

        const result = await OTP.findOne({otp:otp});
        console.log("OTP ", otp);
        console.log("result ", result);

        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
            });
        };

        const otpPayload = {email,otp};
        const otpBody = await OTP.create(otpPayload);
        console.log("OTP BODY", otpBody);

        res.status(200).json({
            success:true,
            message:`OTP Sent Successfully`,
            otp,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            error:error.message,
        });
    }
}


exports.login = async (req,res) => {
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
        }

        const user = await User.findOne({email}).populate("additionalDetails");

        if(!user){
            return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
        }

        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(
                {email:user.email, id:user._id, accountType:user.accountType},
                process.env.JWT_SECRET,
                {
                    expiresIn:"24h",
                }
            );

            user.token = token;
            user.password = undefined;

            const options = {
                expires:new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            };

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message: "User Login Success"
            })
        }else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}

    }catch(error){
        return res.status(500).json({
			success: false,
			message: `Login Faild Please Try Again`,
		});
    }
}