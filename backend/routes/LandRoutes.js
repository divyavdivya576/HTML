const express = require("express");
const router = express.Router();

const Land = require("../models/Land");

router.post("/addland", async (req, res) => {
    try {
        const land = new Land(req.body);
        await land.save();

        res.json({
            success: true,
            message: "Land Added Successfully"
        });
    } catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: "Failed to Add Land"
        });
    }
});

router.get("/lands", async (req, res) => {
    try {
        const lands = await Land.find();
        res.json(lands);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error Fetching Lands"
        });
    }
});

module.exports = router;