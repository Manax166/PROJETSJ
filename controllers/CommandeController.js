const { Bar, Commande, Biere } = require("../models/index");

const addOrder = async (req, res) => {
  const { id_bar } = req.params;
  if (!id_bar) {
    return res
      .status(400)
      .json({ msg: "L'ID du bar est manquant dans l'URL." });
  }

  try {
    const bar = await Bar.findByPk(id_bar);

    if (!bar) {
      return res.status(400).json({ msg: "Ce bar n'existe pas" });
    }

    const data = { ...req.body, bar_id: id_bar };

    const result = await Commande.create(data);

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Un problème est survenue", error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { id_commande } = req.params;

  try {
    const commande = await Commande.findByPk(id_commande);
    if (!commande) {
      return res.status(404).json({ msg: "Cette commande n'existe pas." });
    }

    await commande.update(req.body);
    res.status(200).json({ msg: "Commande mise à jour avec succès", commande });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Un problème est survenu", error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  const { id_commande } = req.params;

  try {
    const commande = await Commande.findByPk(id_commande);
    if (!commande) {
      return res.status(404).json({ msg: "Cette commande n'existe pas." });
    }

    await commande.destroy();
    res.status(200).json({ msg: "Commande supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Un problème est survenu", error: error.message });
  }
};

const getAllOrdersFromBar = async (req, res) => {
  const { id_bar } = req.params;

  try {
    const bar = await Bar.findByPk(id_bar, { include: Commande });

    if (!bar) {
      return res.status(404).json({ msg: "Ce bar n'existe pas." });
    }

    res.status(200).json(bar.commandes);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Un problème est survenu", error: error.message });
  }
};

const getOrder = async (req, res) => {
  const { id_commande } = req.params;

  try {
    const commande = await Commande.findByPk(id_commande);
    if (!commande) {
      return res.status(404).json({ msg: "Cette commande n'existe pas." });
    }

    res.status(200).json(commande);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Un problème est survenu", error: error.message });
  }
};

module.exports = {
  addOrder,
  updateOrder,
  deleteOrder,
  getAllOrdersFromBar,
  getOrder,
};
