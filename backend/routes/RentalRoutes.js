const express = require("express");
const router = express.Router();

const Rental = require("../models/Rental");

router.post("/rent", async (req, res) => {

```
try {

    const rental = new Rental(req.body);

    await rental.save();

    res.json({
        success: true,
        message: "Rental Request Saved Successfully"
    });

} catch(error){

    console.log(error);

    res.json({
        success: false,
        message: "Rental Request Failed"
    });

}
```

});

router.get("/rentals", async (req, res) => {

```
const rentals = await Rental.find();

res.json(rentals);
```

});

module.exports = router;
