const User = require("../models/User");
const {uploadImgCloudinary} = require("../ImageUpload/imageuploader");
const Product = require("../models/Products");
const Category = require("../models/Category");
// const Products = require("../models/Products");

exports.createProduct = async (req,res) => {
    try{
        const userId = req.user.id;

        let {
            productName,
            price,
            category,
            status,
        } = req.body;

        const thumbnail = req.files.thumbnailImage;

        if(!productName || !price || !category || !thumbnail){
            return res.status(400).json({
				success: false,
				message: "All Fields are Requireds",
			});
        }
        
        if(!status || status === undefined){
            status = "Draft";
        }

        const selarDetails = await User.findById(userId,{
            accountType:"Selar",
        });

        if(!selarDetails){
            return res.status(404).json({
				success: false,
				message: "Selar Details Not Found",
			});
        }

        const thumbnailImage = await uploadImgCloudinary(
            thumbnail,
            process.env.FOLDER_NAME
        );

        console.log(thumbnailImage);

        const newProduct = await Product.create({
            productName,
            price,
            selar:selarDetails._id,
            thumbnail:thumbnailImage.secure_url,
            status:status,
        });

        // Add the new Product to the Selar

        await User.findByIdAndUpdate(
            {
                _id:selarDetails._id,
            },
            {
                $push:{
                    product: newProduct._id,
                }
            },
        {new:true}
        );

        // Add the new Product to the category

        await  Category.findByIdAndUpdate(
            {_id:category},
            {
                $push:{
                    products:newProduct._id,
                },
            },
            {new:true}
        );
        res.status(200).json({
			success: true,
			data:newProduct,
			message: "newProducts Created Successfully",
		});

    }catch(error){
        console.log(error);
        res.status(500).json({
			success: false,
			message: "Failed to create Products",
			error: error.message,
		});
    }
};

exports.getAllproducts = async (req,res) => {
    try{
        const allProducts = await Product.find(
            {},
            {
                productName:true,
                price:true,
                thumbnail:true,
                selar:true,
                ratingAndReviews:true,
            }

        )
        .populate("seler")
        .exec();

        return res.status(200).json({
			success: true,
			data:allProducts,
		});

    }catch(error){
        console.log(error);
		return res.status(404).json({
			success: false,
			message: `Can't fetch Products Data`,
			error: error.message,
		});
    }
}