const express = require("express");
const router = express.Router();
const webInfoController = require('../controllers/webInfoController.js');
const productBrandController = require('../controllers/productRelatedControllers/brandController.js');

const categoryController = require("../controllers/productRelatedControllers/categoryController");


// Website info Related Data api 
router.post("/web-info", webInfoController.CreateWebInfo);
router.get("/web-info", webInfoController.getAllWebInfo);
router.put("/web-info/:id", webInfoController.updateWebInfo);
router.get("/web-info/:id", webInfoController.SingleInfo);
router.delete("/web-info/:id", webInfoController.deleteInfo);

// Product related api and other related api 
// (1. Brand, 2. Category)

// 1. Brand related api 
router.post("/product-brand", productBrandController.CreateBrand);
router.get("/product-brand", productBrandController.getAllBrand);
router.get("/product-brand/:id", productBrandController.getSingleBrand);
router.put("/product-brand/:id", productBrandController.updateBrand);
router.delete("/product-brand/:id", productBrandController.deleteBrand);


// 2. Category related api 
router.post("/category", categoryController.CreateCategory);
router.get("/category", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getSingleCategory);
router.put("/category/:id", categoryController.updateCategory);
router.delete("/category/:id", categoryController.deleteCategory);


module.exports = router;