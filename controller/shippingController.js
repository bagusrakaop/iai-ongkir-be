const axios = require('axios');

const calculateShippingCost = async (req, res) => {
    const { weight, ship_origin, ship_destination, courier } = req.body;

    if (!weight || !ship_origin || !ship_destination) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const requestData = {
        origin: ship_origin,
        destination: ship_destination,
        weight: weight,
        courier: courier, 
    };

    try {
        const response = await axios.post(`https://api.rajaongkir.com/starter/cost`, requestData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'key': process.env.RAJAONGKIR_KEY,
            },
        });

        const costs = response.data.rajaongkir.results[0].costs;
        const formattedCosts = costs.map(cost => ({
            service: cost.service,
            description: cost.description,
            cost: cost.cost[0].value,
            etd: cost.cost[0].etd,
        }));

        res.json({
            origin: ship_origin,
            destination: ship_destination,
            weight: weight,
            costs: formattedCosts,
        });
    } catch (error) {
        console.error('Error fetching shipping cost:', error);
        res.status(500).json({ error: 'Failed to fetch shipping cost' });
    }
};

module.exports = {
    calculateShippingCost,
};