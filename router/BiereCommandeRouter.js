const router = require("express").Router();
const {
  addBeerIncommand,
  deleteBeerInCommand,
} = require("../controllers/BiereCommandeController");

router.post("/commandes/:id/biere/:id", addBeerIncommand);
router.delete("/commandes/:id/biere/:id", deleteBeerInCommand);

module.exports = router;
