const sequelize = require("sequelize");
const db = require("../config/database");

const Biere = db.define("biere", {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrements: true },
  name: { type: sequelize.STRING, allowNull: false },
  description: { type: sequelize.TEXT, allowNull: true },
  degree: { type: sequelize.FLOAT, allowNull: false },
  prix: { type: sequelize.FLOAT, allowNull: false },
  degree: { type: sequelize.FLOAT, allowNull: false },
});

module.exports = Biere;
