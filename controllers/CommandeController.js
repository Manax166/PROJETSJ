const { Bar, Commande, Biere } = require("../models/index");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

const addOrder = async (req, res) => {
  const { id_bar } = req.params;

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
    await commande.setBieres([]);
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

const getBarCommandsByDate = async (req, res) => {
  try {
    data = req.query;
    date = new Date(Date.parse(data.date));
    const id = parseInt(req.params.id_bar);
    if (typeof date !== "object")
      res.status(400).json("Merci de saisir une date valide" + typeof date);
    let yesterdayDate = new Date(date);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    console.log(date + "\n" + yesterdayDate);

    commandes = await Commande.findAll({
      where: {
        [Op.and]: [
          { bar_id: id },
          { date: { [Op.between]: [yesterdayDate, date] } },
        ],
      },
    });

    res.json(commandes);
  } catch (err) {
    console.log("erreur " + err);
  }
};

const getBarCommandsBetweenTwoPrices = async (req, res) => {
  try {
    data = req.query;
    min = parseInt(data.min);
    max = parseInt(data.max);
    const id = parseInt(req.params.id_bar);
    if (min === undefined) min = 0;
    if (max === undefined) max = Number.MAX_VALUE;
    if (min !== min || max !== max)
      res.status(400).json("Merci de ne saisir que des nombres");
    else if (min > max)
      res.status(400).json("min ne peut pas être plus grand que max");
    else if (min < 0 || max < 0)
      res.status(400).json("Pas de nombres négatifs");

    commandes = await Commande.findAll({
      where: {
        [Op.and]: [{ bar_id: id }, { prix: { [Op.between]: [min, max] } }],
      },
    });

    res.json(commandes);
  } catch (err) {
    console.log("erreur " + err);
  }
};

module.exports = {
  addOrder,
  updateOrder,
  deleteOrder,
  getAllOrdersFromBar,
  getOrder,
  getBarCommandsByDate,
  getBarCommandsBetweenTwoPrices,
};
