const express = require("express")
const { postCrypto, getCryptos, getCrypto, updateCrypto, deleteCrypto } = require("../controllers/cryptos")
router = express.Router()

router.get("/crypto", getCryptos) //
router.get("/:cryptoId", getCrypto) //
router.post("/add", postCrypto) //
router.put("/:cryptoId", updateCrypto)
router.delete("/:cryptoId", deleteCrypto)

module.exports = router
