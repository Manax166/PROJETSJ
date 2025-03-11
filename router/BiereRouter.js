const router = require("express").Router();
const {
  addBeer,
  updateBeer,
  deleteBeer,
  getBeers,
  getBeerById,
} = require("../controllers/BeerController");

router.post("/bars/:id_bar/biere", addBeer);
router.put("/biere/:id_biere", updateBeer);
router.delete("/biere/:id_biere", deleteBeer);
router.get("/bars/:id_bar/biere", getBeers);
router.get("/biere/:id_biere", getBeerById);

module.exports = router;
