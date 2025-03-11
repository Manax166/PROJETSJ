const router = require("express").Router()
const { addBar, updateBar, deleteBar, getBars, getBarById }  = require("../controllers/barController")

router.post("/bars", addBar)
router.put("/bars/:id_bar", updateBar)
router.delete("/bars/:id_bar", deleteBar)
router.get("/bars", getBars)
router.get("/bars/:id_bar", getBarById)

module.exports = router