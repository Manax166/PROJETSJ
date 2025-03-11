const Sequelize = require("sequelize");

const DIALECT = process.env.DIALECT || "sqlite";
const STORAGE = process.env.STORAGE || "./db.sqlite";

const db = new Sequelize({
  dialect: DIALECT,
  storage: STORAGE,
});
db.sync();

module.exports = db;
