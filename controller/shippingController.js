const calculateShippingCost = (req, res) => {
    const { city_id, weight, ship_origin, ship_destination } = req.body;

    if (!city_id || !weight || !ship_origin || !ship_destination) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Need Implementation!
    // const cost = ; 

    res.json({ city_id, ship_origin, ship_destination, weight, cost });
};

module.exports = {
    calculateShippingCost,
};
