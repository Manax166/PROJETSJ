const router = require("express").Router();
const {
  addBeer,
  updateBeer,
  deleteBeer,
  getBeers,
  getBeerById,
} = require("../controllers/BeerController");
const BiereRequest = require("../middleware/BiereRequest");

router.post("/bars/:id_bar/biere", BiereRequest,addBeer);
router.put("/biere/:id_biere", BiereRequest,updateBeer);
router.delete("/biere/:id_biere", deleteBeer);
router.get("/bars/:id_bar/biere", getBeers);
router.get("/biere/:id_biere", getBeerById);

module.exports = router;
