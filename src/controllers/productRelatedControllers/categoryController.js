const categoryModel = require("../../models/productRelatedModels/categoryModel");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.CreateCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const result = await categoryModel.create(reqBody);
        res.status(201).json({
            status: "success",
            msg: "Category created successfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            msg: err.toString(),
        });
    }
};

exports.getAllCategory = async (req, res) => {
    try {
        const result = await categoryModel.find();
        res.status(200).json({
            status: "success",
            msg: "all category found successfully",
            data: result,
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            msg: e.toString(),
        });
    }
};

exports.getSingleCategory = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await categoryModel.findOne({ _id: id });
        res.status(200).json({
            status: "success",
            msg: "Category found successfully",
            data: result,
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};


exports.updateCategory = async (req, res) => {
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let filter = { _id: id };

        let update = reqBody;

        let data = await categoryModel.findById(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Category not found"
        });
        const updatedInfo = await categoryModel.findByIdAndUpdate(filter, update, { new: true, runValidators: true });

        return res.status(200).json({
            status: "success",
            msg: "Category updated successfully",
            data: updatedInfo,
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: error.toString(),
        })
    }
};


exports.deleteCategory = async (req, res) => {
    try {
        let id = req.params.id;
        let filter = { _id: id };
        let data = await categoryModel.findOne(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Category not found"
        });

        await categoryModel.findByIdAndDelete(filter);
        return res.status(200).json({
            status: "success",
            msg: "Category deleted successfully",
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};