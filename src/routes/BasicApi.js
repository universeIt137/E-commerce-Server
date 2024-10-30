const express = require("express");
const router = express.Router();
const webInfoController = require('../controllers/webInfoController.js');

// Website info Related Data api 
router.post("/web-info", webInfoController.CreateWebInfo);
router.get("/web-info", webInfoController.getAllWebInfo);
router.put("/web-info/:id", webInfoController.updateWebInfo);
router.get("/web-info/:id", webInfoController.SingleInfo);
router.delete("/web-info/:id", webInfoController.deleteInfo);

module.exports = router;