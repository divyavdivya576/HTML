const express = require("express");
const router = express.Router();

const Rental = require("../models/Rental");

// Save Rental Request
router.post("/rent", async (req, res) => {


try {

    const rental = new Rental(req.body);

    await rental.save();

    res.json({
        success: true,
        message: "Rental Request Saved Successfully"
    });

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: "Rental Request Failed"
    });

}


});

// Get All Rental Requests
router.get("/rentals", async (req, res) => {

try {

    const rentals = await Rental.find();

    res.json(rentals);

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: "Error Fetching Rentals"
    });

}


});

// Update Rental Status
router.put("/rentals/:id", async (req, res) => {


try {

    await Rental.findByIdAndUpdate(
        req.params.id,
        {
            status: req.body.status
        }
    );

    res.json({
        success: true,
        message: "Status Updated Successfully"
    });

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: "Update Failed"
    });

}

});

module.exports = router;
