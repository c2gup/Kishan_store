const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DATABASE Connected"))
    .catch((error) => {
        console.log("DATABASE Connect failed");
        console.error(error);
        process.exit(1);
    })
}