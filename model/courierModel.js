const pool = require('../config/db');

const getAllCourier = async () => {
    const result = await pool.query('SELECT * FROM kurir');
    return result.rows;
};

module.exports = {
    getAllCourier
};