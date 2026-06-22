const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
    farmerName: String,
    phone: String,
    duration: String,
    crop: String,
    message: String
});

module.exports = mongoose.model("Rental", rentalSchema);