const provinceModel = require('../model/provinceModel');

const getAllProvinces = async (req, res) => {
    try {
        const provinces = await provinceModel.getAllProvinces();
        res.json(provinces);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProvinceById = async (req, res) => {
    try {
        const province = await provinceModel.getProvinceById(req.params.id);
        res.json(province);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProvinces,
    getProvinceById,
};