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

module.exports = router;