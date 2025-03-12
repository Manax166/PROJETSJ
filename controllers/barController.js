const { Bar, Biere } = require("../models/index");

const addBar = async (req, res) => {
  const data = { ...req.body };
  try {
    const bar = await Bar.create(data);
    res.status(201).json({
      msg: `${bar.nom} ajouté`,
      bar: bar,
    });
  } catch (error) {
    res.status(500).json({
      msg: `Erreur lors de l'ajout du bar`,
      error: error.message,
    });
  }
};

const updateBar = async (req, res) => {
  const { id_bar } = req.params;
  try {
    const bar = await Bar.findByPk(id_bar);
    if (!bar) {
      return res.status(404).json({ msg: "Bar non trouvé" });
    }
    const data = { ...req.body };

    const result = await bar.update(data);
    res.status(200).json({
      msg: `${result.nom} mis à jour`,
      bar: result,
    });
  } catch (error) {
    res.status(500).json({
      msg: `Erreur lors de l'ajout du bar`,
      error: error.message,
    });
  }
};

const deleteBar = async (req, res) => {
  const { id_bar } = req.params;
  console.log(`Tentative de suppression du bar avec ID: ${id_bar}`);
  try {
    const bar = await Bar.findByPk(id_bar);
    if (!bar) {
      return res.status(404).json({ msg: "Bar non trouvé" });
    }
    await bar.destroy();
    res.status(200).json({
      msg: `${bar.nom} supprimé`,
      bar: bar,
    });
  } catch (error) {
    res.status(500).json({
      msg: `Erreur lors de l'ajout du bar`,
      error: error.message,
    });
  }
};

const getBars = async (req, res) => {
  try {
    const bars = await Bar.findAll();
    res.status(200).json(bars);
  } catch (error) {
    res.status(500).json({
      msg: "Erreru lors de la récuperation des bars",
      error: error.message,
    });
  }
};

const getBarsByCity = async (req, res) => {
  try {
    const city = req.query.ville;

    const result = await Bar.findAll({ where: { adresse: city } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      msg: "Erreru lors de la récuperation des bars",
      error: error.message,
    });
  }
};

const getBarsByName = async (req, res) => {
  try {
    const nom = req.query.name;

    const result = await Bar.findAll({ where: { nom: nom } });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      msg: "Erreru lors de la récuperation des bars",
      error: error.message,
    });
  }
};

const getBarById = async (req, res) => {
  const { id_bar } = req.params;
  try {
    const bar = await Bar.findByPk(id_bar);
    if (!bar) {
      return res.status(404).json({
        msg: "Bar non trouvé",
      });
    }
    res.status(200).json(bar);
  } catch (error) {
    res.status(500).json({
      msg: "Erreru lors de la récuperation du bar",
      error: error.message,
    });
  }
};

const getBarsAvgDegree = async (req, res) => {
  const { id_bar } = req.params;

  try {
    const beers = await Biere.findAll({
      where: { bar_id: id_bar },
      attributes: ["degree"],
    });

    if (beers.length === 0) {
      return res.status(404).json({ msg: "Aucune bière trouvée pour ce bar" });
    }

    const totalDegree = beers.reduce((sum, beer) => sum + beer.degree, 0);
    const averageDegree = totalDegree / beers.length;

    res.status(200).json({ averageAlcoholDegree: averageDegree.toFixed(2) });
  } catch (error) {
    res.status(500).json({
      msg: "Erreru lors de la récuperation du bar",
      error: error.message,
    });
  }
};

module.exports = {
  addBar,
  updateBar,
  deleteBar,
  getBars,
  getBarById,
  getBarsByCity,
  getBarsByName,
  getBarsAvgDegree,
};
