const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config() 

const app = new express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl).then((res) => {
    console.log("---Database connected---")
}).catch((e) => {
    console.log("---Database connect fail");
})


app.use(express.urlencoded({ limit: "100mb" }));
app.use(express.json({ limit: "100mb" }));
app.get("/", async (req, res) => {
    res.send("Server is running");
})


// routes 
const router = require("./src/routes/BasicApi");
app.use("/api/v1", router);


module.exports = app;