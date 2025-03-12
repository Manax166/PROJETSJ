const router = require("express").Router();
const {
  addBar,
  updateBar,
  deleteBar,
  getBars,
  getBarsByCity,
  getBarsByName,
  getBarsAvgDegree,
  getBarById,
} = require("../controllers/barController");
const barRequest = require("../middleware/BarRequest");

router.post("/bars", barRequest, addBar);
router.put("/bars/:id_bar", updateBar);
router.delete("/bars/:id_bar", deleteBar);
router.get("/bars/ville", getBarsByCity);
router.get("/bars/name", getBarsByName);
router.get("/bars/:id_bar/degree", getBarsAvgDegree);
router.get("/bars", getBars);

router.get("/bars/:id_bar", getBarById);

module.exports = router;
