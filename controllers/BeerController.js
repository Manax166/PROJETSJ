const { Biere, Bar } = require("../models/index");

const addBeer = async (req, res) => {
  try {
    const bar_id = parseInt(req.params.id_bar);
    const { name, description, degree, prix } = req.body;
    result = await Biere.create({ name, description, degree, prix, bar_id });
    res.status(200).json({
      msg: `${result.nom} mis à jour`,
      bar: result,
    });
  } catch (err) {
    res.status(400).json("erreur " + err);
  }
};
const updateBeer = async (req, res) => {
  try {
    const { name, description, degree, prix } = req.body;
    const id = parseInt(req.params.id_biere);
    result = await Biere.update({ name, description, degree, prix }, { where: { id } });
    res.status(200).json({
      msg: `${result.nom} mis à jour`,
      bar: result,
    });
  } catch (err) {
    res.status(400).json("erreur " + err);
  }
};
const deleteBeer = async (req, res) => {
  try {
    const id = parseInt(req.params.id_biere);
    const biere = await Biere.findByPk(id);
    await biere.destroy();
    res.status(200).json("Biere supprimée");
  } catch (err) {
    res.status(400).json("erreur " + err);
  }
};
const getBeers = async (req, res) => {
  try {
    const id = parseInt(req.params.id_bar);
    const bieres = await Biere.findAll({ where: { bar_id: id } });
    res.status(200).json(bieres);
  } catch (err) {
    res.status(400).json("erreur " + err);
  }
};
const getBeerById = async (req, res) => {
  try {
    const id = parseInt(req.params.id_biere);
    const biere = await Biere.findByPk(id);
    res.status(200).json(biere);
  } catch (err) {
    res.status(400).json("erreur " + err);
  }
};

module.exports = { addBeer, updateBeer, deleteBeer, getBeers, getBeerById };
