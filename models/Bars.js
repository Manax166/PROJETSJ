const db = require("../config/database")
const sequelize =  require("sequelize")

const Bars = db.define('Bars', {
    id: {type: sequelize.INTEGER, autoIncrements: true, primaryKey: true },
    nom: {type: sequelize.STRING, unique: true},
    adresse: {type: sequelize.STRING},
    tel: {type: sequelize.STRING},
    email: {type: sequelize.STRING},
    description: {type: sequelize.STRING}
})

module.exports = Bars