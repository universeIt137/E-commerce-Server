const productBrandModel = require("../../models/productRelatedModels/productBrandModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


exports.CreateBrand = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await productBrandModel.create(reqBody);
        res.status(201).json({
            status: "success",
            msg: "Brand created successfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            msg: err.toString(),
        });
    }
};

exports.getAllBrand = async (req, res) => {
    try {
        const result = await productBrandModel.find();
        res.status(200).json({
            status: "success",
            msg: "all brand found successfully",
            data: result,
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            msg: e.toString(),
        });
    }
};



exports.getSingleBrand = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await productBrandModel.findOne({ _id: id });
        res.status(200).json({
            status: "success",
            msg: "Brand found succcessfully",
            data: result,
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};

exports.updateBrand = async (req, res) => {
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let filter = { _id: id };

        let update = reqBody;
        
        let data = await productBrandModel.findById(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Brand not found"
        });
        const updatedInfo = await productBrandModel.findByIdAndUpdate(filter, update, { new: true, runValidators: true });

        return res.status(200).json({
            status: "success",
            msg: "Brand updated successfully",
            data: updatedInfo,
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: error.toString(),
        })
    }
};


exports.deleteBrand = async (req, res) => {
    try {
        let id = req.params.id;
        let filter = { _id: id };
        let data = await productBrandModel.findOne(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Brand not found"
        });

        await productBrandModel.findByIdAndDelete(filter);
        return res.status(200).json({
            status: "success",
            msg: "Brand deleted successfully",
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};