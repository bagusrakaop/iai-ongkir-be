const express = require('express');
const bodyParser = require('body-parser');
const cityRoutes = require('./routes/cityRoutes');
const provinceRoutes = require('./routes/provinceRoutes');
const shippingRoutes = require('./routes/shippingRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', cityRoutes);
app.use('/api', provinceRoutes);
app.use('/api', shippingRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});