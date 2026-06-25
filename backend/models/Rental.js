const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({

    farmerName: String,

    phone: String,

    email: String,

    duration: String,

    crop: String,

    message: String,

    status: {
        type: String,
        default: "Pending"
    }

});

module.exports = mongoose.model("Rental", rentalSchema);