const { Biere } = require("../models/index");
const { Commande } = require("../models/index");

const addBeerIncommand = async (req, res) => {
  try {
    const id_Com = parseInt(req.params.id_commande);
    const id_Biere = parseInt(req.params.id_biere);

    console.log(id_Com);
    console.log(id_Biere);

    const [biere, commande] = await Promise.all([
      Biere.findByPk(id_Biere),
      Commande.findByPk(id_Com),
    ]);
    await commande.addBiere(biere);
  } catch (err) {
    console.log("erreur " + err);
  }
};
const deleteBeerInCommand = async (req, res) => {
  try {
    const id_Com = parseInt(req.params.id_commande);
    const id_Biere = parseInt(req.params.id_biere);

    const [biere, commande] = await Promise.all([
      Biere.findByPk(id_Biere),
      Commande.findByPk(id_Com),
    ]);
    await commande.removeBiere(biere);
  } catch (err) {
    console.log("erreur " + err);
  }
};

module.exports = {
  addBeerIncommand,
  deleteBeerInCommand,
};
