const db = require("../config/database");
const sequelize = require("sequelize");

const Bars = db.define("Bars", {
  id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  nom: { type: sequelize.STRING, unique: true, allowNull: false },
  adresse: { type: sequelize.STRING, allowNull: false },
  tel: { type: sequelize.STRING, allowNull: false },
  email: { type: sequelize.STRING, allowNull: false },
  description: { type: sequelize.STRING, allowNull: false },
});

module.exports = Bars;
