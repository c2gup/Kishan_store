const express = require("express")
const router = express.Router();

const {
    createProduct,
    getAllproducts
} = require("../controllers/Products")

const {
    createCategory,
    showAllCategory,
    categoryProductDetails,
} = require("../controllers/Category")

const {auth,isCoustmer,isAdmin,isSelar} = require("../middleweares/auth")

router.post("/createProduct", auth, isSelar,createProduct);
router.get("/getAllProduct", getAllproducts);

router.post("/createCategory", auth, isAdmin, createCategory)
router.get("/showAllCategory", showAllCategory);
router.post("/ProductDetails", categoryProductDetails);

module.exports = router