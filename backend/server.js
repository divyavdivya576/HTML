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

// Use Routes
app.use("/", userRoutes);
const landRoutes = require("./routes/LandRoutes");

app.use("/", landRoutes);

// Test Route
app.get("/", (req, res) => {
res.send("AgriConnect Backend Running 🚀");
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT} 🚀`);
});
