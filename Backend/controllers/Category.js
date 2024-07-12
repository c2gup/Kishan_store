
const Category = require("../models/Category")

exports.createCategory = async (req,res) => {
    try{
        const {productCategory,description} = req.body;
        if(!productCategory){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            });
        }

        const CategoryDetails = await Category.create({
            productCategory:productCategory,
            description:description,
        });

        console.log("CategoryDetails", CategoryDetails);

        return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});


    }catch(error){
        console.log(error);
        return res.status(500).json({
			success: true,
			message: error.message,
		});
    }
}

exports.showAllCategory = async (req,res) => {
    try{
        const allCategory = await Category.find({});
        res.status(200).json({
			success: true,
			data: allCategory,
		});

    }catch(error){
        return res.status(500).json({
			success: false,
			message: error.message,
		});
    }
};

exports.categoryProductDetails = async (req,res) => {
    try{
        const {categoryId} = req.body;

        const selectedCategory = await  Category.findById(categoryId).populate("product").exec();

        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:'Data Not Found',
            });
        }

        const filterCategory = await Category.find({
            _id: {$ne:categoryId},
        })
        .populate("product")
        .exec();

        return res.status(200).json({
            success:true,
            data: {
                selectedCategory,
                filterCategory,
            },
        });



    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}