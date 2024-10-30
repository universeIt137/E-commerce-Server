const webInfoModel = require("../models/webInfoModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


exports.CreateWebInfo = async (req, res) => {
    try {
        const reqBody = req.body;
        // console.log(reqBody);
        const result = await webInfoModel.create(reqBody);
        res.status(201).json({
            status: "success",
            msg: "WebInfo created successfully",
            data: result,
        });
    } catch (err) {
        // console.log(err.toString());
        res.status(500).json({
            status: "failed",
            msg: err.toString(),
        });
    }
};

exports.getAllWebInfo = async (req, res) => {
    try {
        const result = await webInfoModel.find();
        res.status(200).json({
            status: "success",
            msg: "Get all service find successfully",
            data: result,
        });
    } catch (e) {
        res.status(500).json({
            status: "failed",
            msg: e.toString(),
        });
    }
};

exports.updateWebInfo = async (req, res) => {
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let filter = { _id: id };
        
        let update = reqBody;
        console.log("id:",id);
        
        let data = await webInfoModel.findById(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Info not found"
        });
        const updatedInfo = await webInfoModel.findByIdAndUpdate(
            filter,
            update,
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            status: "success",
            msg: "Info updated successfully",
            data: updatedInfo,
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: error.toString(),
        })
    }
};


exports.SingleInfo = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await webInfoModel.findOne({ _id: id });
        res.status(200).json({
            status: "success",
            msg: "Info find successfully",
            data: result,
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};

exports.deleteInfo = async (req, res) => {
    try {
        let id = req.params.id;
        let filter = { _id: id };
        let data = await webInfoModel.findOne(filter);
        if (!data) return res.status(404).json({
            status: "fail",
            msg: "Info not found"
        });
        await webInfoModel.findByIdAndDelete(filter);
        return res.status(200).json({
            status: "success",
            msg: "Info deleted successfully",
        });
    } catch (e) {
        res.status(400).json({ status: "failed" });
    }
};