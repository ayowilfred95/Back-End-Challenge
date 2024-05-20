const express = require("express")
const {randomNumber,getData, patchNumber } = require("../controller/randomController");

const router = express.Router()

router.post("/data",randomNumber)
router.get("/data",getData )
router.patch("/data", patchNumber)


module.exports = router
