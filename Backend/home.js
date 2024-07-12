
const express = require("express");
const app = express();

const userRoute = require("./routes/User");
const productRoute = require("./routes/Products");
const database = require("./config/database");
// const {uploadImgCloudinary } = require("./ImageUpload/imageuploader")
const cookieParser = require("cookie-parser")
const cors = require("cors");
const fileUpload = require("express-fileupload")
const {cloudinaryConnect} = require("./config/cloudinary");

const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

database.connect();

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:"http://localhost:3000",
		credentials:true,
    })
)

app.use(
    fileUpload({
        useTempFiles:true,
		tempFileDir:"/tmp",
    })
)


cloudinaryConnect();

app.use("/api/v1/auth",userRoute);
app.use("/api/v1/product",productRoute);

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Server is running'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

