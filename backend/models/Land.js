const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
    owner: String,
    location: String,
    acres: Number,
    cost: Number,
    soilType: String,
    waterAvailability: String,
    contact: String
});

module.exports = mongoose.model("Land", landSchema);