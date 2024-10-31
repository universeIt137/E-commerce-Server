const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productBrandSchema = new Schema({
    brandName:
    {
        type: String,
    },
    brandImage:
    {
        type: String,
    }
},
    { timestamps: true, versionKey: false }
);

const productBrandModel = model("productBrand", productBrandSchema);
module.exports = productBrandModel;