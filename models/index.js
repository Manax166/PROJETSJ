const Biere = require("./Biere");
const Bar = require("./Bars");
const Commande = require("./Commande");

Bar.hasMany(Biere, { foreignKey: "bar_id" });
Biere.belongsTo(Bar, { foreignKey: "bar_id" });

Bar.hasMany(Commande, { foreignKey: "bar_id" });
Commande.belongsTo(Bar, { foreignKey: "bar_id" });

Biere.belongsToMany(Commande, { through: "Biere_Commande" });
Commande.belongsToMany(Biere, { through: "Biere_Commande" });

module.exports = { Bar, Biere, Commande };
