const cityModel = require('../model/cityModel');

const getAllCities = async (req, res) => {
    try {
        const cities = await cityModel.getAllCities();
        res.json(cities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCityById = async (req, res) => {
    try {
        const city = await cityModel.getCityById(req.params.id);
        res.json(city);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCities,
    getCityById,
};