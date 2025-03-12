const router = require("express").Router();
const {
  addOrder,
  updateOrder,
  deleteOrder,
  getAllOrdersFromBar,
  getOrder,
  getBarCommandsByDate,
  getBarCommandsBetweenTwoPrices,
} = require("../controllers/CommandeController");
const commandRequest = require("../middleware/commandReqest");

router.post("/bars/:id_bar/commandes", commandRequest, addOrder);
router.put("/commandes/:id_commande", commandRequest, updateOrder);
router.delete("/commandes/:id_commande", deleteOrder);
router.get("/bars/:id_bar/commandes/prix", getBarCommandsBetweenTwoPrices);
router.get("/bars/:id_bar/commandes/date", getBarCommandsByDate);
router.get("/bars/:id_bar/commandes", getAllOrdersFromBar);
router.get("/commandes/:id_commande", getOrder);

module.exports = router;
