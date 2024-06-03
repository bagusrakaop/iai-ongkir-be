const pool = require('../config/db');

const getAllProvinces = async () => {
    const result = await pool.query('SELECT * FROM provinsi');
    return result.rows;
};

const getProvinceById = async (id) => {
    const result = await pool.query('SELECT * FROM provinsi WHERE id = $1', [id]);
    return result.rows[0];
};

module.exports = {
    getAllProvinces,
    getProvinceById,
};