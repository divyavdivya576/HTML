const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Test Route
router.get("/", (req, res) => {
    res.send("User Route Working 🚀");
});

// Register Route
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
            message: "Registration Successful ✅"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Registration Failed ❌"
        });

    }

});

// Login Route
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        });

        if (!user) {
            return res.json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        res.json({
            success: true,
            message: "Login Successful ✅",
            user
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Login Failed ❌"
        });

    }

});

module.exports = router;