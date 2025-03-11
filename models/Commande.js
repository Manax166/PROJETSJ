const sequelize = require("sequelize");
const db = require("../config/database");

const Commande = db.definer("commande", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  prix: { type: sequelize.FLOAT, allowNull: false },
  date: { type: sequelize.DATE, allowNull: false },
  status: { type: sequelize.FLOAT, allowNull: false },
});

module.exports = Commande;
