
const express = require("express");
const router = express.Router();

const {
    login,
    signup,
    sendOtp
} = require("../controllers/Authentic");

const {auth} = require("../middleweares/auth");

router.post("/login",login);

router.post("/signup",signup);

router.post("/sendotp", sendOtp);

module.exports = router