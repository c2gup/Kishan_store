
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = async (req,res,next) => {
    try{
        const token = req.cookies.token || req.body.token 
                      || req.header("Authorisation").replace("Bearer ", "")

        if(!token){
            return res.status(401).json({
                success:false,
                message:'TOken is missing',
            });
        }

     try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        console.log("it is decode", decode);
        req.user = decode;

     }catch(err){
        return res.status(401).json({
            success:false,
            message:'token is invalid',
        });
     }
     next();

    }catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
      
    }
   
} 

exports.isCoustmer = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Coustmor") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Coustmor only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   };


exports.isAdmin = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Admin") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Admin only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   };

   
exports.isSelar = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Selar") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Selar only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   };

   

