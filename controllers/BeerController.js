const {Biere, Bar} = require("../models/index");

const addBeer = async (req, res) => {
    try {
        const bar_id = parseInt(req.params.id_bar)
        const {name, description, degree, prix} = req.body
        await Biere.create( {name, description, degree, prix, bar_id})
        res.status(200)
    } catch(err) {
        res.json('erreur ' + err)
    }
};
const updateBeer = async (req, res) => {
    try {
        const {name, description, degree, prix} = req.body
        const id = parseInt(req.params.id_biere)
        await Biere.update({name, description, degree, prix}, {where: { id }})
        res.status(200)
    } catch (err) {
        res.json('erreur ' + err)
    }
};
const deleteBeer = async (req, res) => {
    try {
        const id = parseInt(req.params.id_biere)
        const biere = await Biere.findByPk(id)
        await biere.destroy()
        res.json("Biere supprimée")
    } catch(err) {
        res.json('erreur ' + err)
    }
};
const getBeers = async (req, res) => {
    try {
        const id = parseInt(req.params.id_bar)
        bieres = await Biere.findAll( {where: { bar_id: id}})
        res.json(bieres)
        res.status(200)
    } catch(err) {
        res.json('erreur ' + err)
    }
};
const getBeerById = async (req, res) => {
    try {
        const id = parseInt(req.params.id_biere)
        biere = await Biere.findByPk(id)
        res.json(biere)
        res.status(200)
    } catch(err){
        res.json('erreur ' + err)
    } 
};

module.exports = { addBeer, updateBeer, deleteBeer, getBeers, getBeerById };
