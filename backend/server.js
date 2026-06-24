const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/agriapp")
.then(() => {
    console.log("MongoDB Connected ✅");
})
.catch((err) => {
    console.log("MongoDB Error ❌", err);
});

// Import Routes
const userRoutes = require("./routes/UserRoutes");
const landRoutes = require("./routes/LandRoutes");
const rentalRoutes = require("./routes/RentalRoutes");

// Use Routes
app.use("/", userRoutes);
app.use("/", landRoutes);
app.use("/", rentalRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("AgriConnect Backend Running 🚀");
});

// Test Lands Route
app.get("/test", (req, res) => {
    res.send("Server Working ✅");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});