const Biere = require("../models/index");

const addBeer = async (req, res) => {
    try {
        const {name, description, degree, prix} = req.body()
        await Biere.create( {name, description, degree, prix})
    } catch(err) {

    }
};
const updateBeer = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {name, description, degree, prix} = req.body()
        await Biere.update({name, description, degree, prix}, {where: { id }})
    } catch (err) {

    }
};
const deleteBeer = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const biere = await Biere.findByPk(id)
        await biere.destroy()
    } catch(err) {

    }
};
const getBeers = async (req, res) => {
    try {
        bieres = await Biere.findAll()
        res.json(bieres)
    } catch(err) {

    }
};
const getBeerById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        biere = await Biere.findByPk(id)
        res.json(biere)
    } catch(err){

    } 
};

module.exports = { addBeer, updateBeer, deleteBeer, getBeers, getBeerById };
