const courierModel = require('../model/courierModel');  

const getAllCouriers = async (req, res) => {
    try {
        const couriers = await courierModel.getAllCourier();  
        res.json(couriers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCouriers,
};