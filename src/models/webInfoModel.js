const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const webInfoSchema = new Schema({
    name: {
        type: String,
    },
    bkash: {
        type: String,
    },
    nogod: {
        type: String,
    },
    rocket: {
        type: String,
    },
    logo: {
        type: String,
    }
},
    { timestamps: true, versionKey: false }
);

const webInfoModel = model("webInfo", webInfoSchema);
module.exports = webInfoModel;