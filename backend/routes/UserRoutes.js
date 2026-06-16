const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("User Route Working 🚀");
});

router.post("/register", async (req, res) => {

    try {

        const { fname, lname, email, password, role } = req.body;

        const user = new User({
            fname,
            lname,
            email,
            password,
            role
        });

        await user.save();

        res.json({
            success: true,
            message: "Registration Successful"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Registration Failed"
        });

    }

});

module.exports = router;