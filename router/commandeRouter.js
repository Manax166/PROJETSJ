const router = require("express").Router()
const {addOrder, updateOrder, deleteOrder, getAllOrdersFromBar, getOrder} = require("../controllers/CommandeController")

router.post("/bars/:id_bar/commandes", addOrder)
router.put("/commandes/:id_commande", updateOrder)
router.delete("/commandes/:id_commande", deleteOrder)
router.get("/bars/:id_bar/commandes", getAllOrdersFromBar)
router.get("/commandes/:id_commande", getOrder)

module.exports = router