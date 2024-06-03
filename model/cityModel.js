const pool = require('../config/db');

const getAllCities = async () => {
    const result = await pool.query('SELECT * FROM kota');
    return result.rows;
};

const getCityById = async (id) => {
    const result = await pool.query('SELECT * FROM kota WHERE id = $1', [id]);
    return result.rows[0];
};

module.exports = {
    getAllCities,
    getCityById,
};
