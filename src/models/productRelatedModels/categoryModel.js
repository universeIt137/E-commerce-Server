const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categoryName:
    {
        type: String,
    },
    parentCategory:
    {
        type: String,
    },
    categoryImg:
    {
        type: String,
    },
    commission:
    {
        type: String,
    },
    verified:
    {
        type: Boolean,
        default: false
    },
},
    { timestamps: true, versionKey: false }
);

const categoryModel = model("category", categorySchema);
module.exports = categoryModel;