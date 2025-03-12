const router = require("express").Router();
const {
  addBeerIncommand,
  deleteBeerInCommand,
} = require("../controllers/BiereCommandeController");

router.post("/commandes/:id_commande/biere/:id_biere", addBeerIncommand);
router.delete("/commandes/:id_commande/biere/:id_biere", deleteBeerInCommand);

module.exports = router;
