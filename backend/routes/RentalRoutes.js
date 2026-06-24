const express = require("express");
const router = express.Router();

const Rental = require("../models/Rental");

// Save Rental Request
router.post("/rent", async (req, res) => {
try {

```
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
```

});

// Get All Rental Requests
router.get("/rentals", async (req, res) => {
try {

```
    const rentals = await Rental.find();

    res.json(rentals);

} catch (error) {

    console.log(error);

    res.status(500).json({
        success: false,
        message: "Error Fetching Rentals"
    });

}
```

});

module.exports = router;
