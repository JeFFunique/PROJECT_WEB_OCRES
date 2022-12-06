//get crypto
const Crypt = require("../models/cryptos")
const getCryptos = async (req, res) => {
    try {
        const cryptos = await Crypt.find();
        res.status(200).json({ success: true, data: cryptos })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
const getCrypto = async (req, res) => {
    const cryptoId = req.params.cryptoId
    try {
        const cryptos = await Crypt.find({
            _id: cryptoId
        })
        res.status(200).json({ success: true, data: cryptos })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//add crypto to DB
const postCrypto = async (req, res) => {
    try {
        const { title } = req.body
        const { price } = req.body
        const { symbol } = req.symbol
        const newCrypto = new Crypt({
            title: title,
            price: price,
            symbol: symbol
        })
        const savedCrypto = await newCrypto.save()
        res.status(201).json({ success: true, data: savedCrypto })

    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

//update data in db
const updateCrypto = async (req, res) => {
    const cryptoId = req.params.cryptoId;
    const { title } = req.body
    const { price } = req.body
    try {
        const crypto = await Crypt.updateOne({ _id: cryptoId }, {
            $set: {
                title: title,
                price: price
            }
        })
        const updatedCryptoData = await Crypt.find({ _id: cryptoId });
        res.status(201).json({ success: true, data: updatedCryptoData })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}

const deleteCrypto = async (req, res) => {
    const cryptoId = req.params.cryptoId
    try {
        await Crypt.remove({ _id: cryptoId })
        res.status(201).json({ success: true, data: "Movie deleted" })
    }
    catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
module.exports = {
    postCrypto,
    getCryptos,
    getCrypto,
    updateCrypto,
    deleteCrypto
}