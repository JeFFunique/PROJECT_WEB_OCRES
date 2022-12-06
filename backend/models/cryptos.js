const mongoose = require("mongoose")
//crypto Schema
const Crypt = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Crypt", Crypt)