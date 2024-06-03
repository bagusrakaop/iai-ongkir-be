# Shipping Cost Calculation API

This project is an Express.js backend API for calculating shipping costs. It connects to a PostgreSQL database containing city and province information and provides several endpoints to fetch data and calculate shipping costs.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/bagusrakaop/iai-ongkir-be.git
    cd iai-ongkir-be
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and configure your database connection:
    ```
    DB_USER=your_username
    DB_HOST=your_host
    DB_NAME=your_database
    DB_PASSWORD=your_password
    ```

## Running the Project

Start the server:
```bash
node index.js
```

The server will run on port 3000 by default.

## API Endpoints
### /GET All Provinces
- Endpoint: /api/provinces
- Method: GET
- Description: Fetch all provinces.
- Response:
```
[
    {
        "id": 1,
        "namaprovinsi": "Province Name"
    },
    ...
]
```

### /GET Province by ID
- Endpoint: /api/provinces/:id
- Method: GET
- Description: Fetch a specific province by its ID.
- Response:
```
{
    "id": 1,
    "namaprovinsi": "Province Name"
}
```

### /GET All Cities
- Endpoint: /api/cities
- Method: GET
- Description: Fetch all cities.
- Response:
```
[
    {
        "id": 1,
        "namakota": "City Name"
    },
    ...
]
```

### /GET City by ID
- Endpoint: /api/cities/:id
- Method: GET
- Description: Fetch a specific city by its ID.
- Response:
```
{
    "id": 1,
    "namakota": "City Name"
}
```

### /GET All Supported Courier
- Endpoint: /api/couriers
- Method: GET
- Description: Fetch all supported couriers
- Response:
```
[
    {
        "id": 1,
        "namakurir": "jne"
    },
    ...
]
```

### /POST Calculate Shipping Cost
- Endpoint: /api/shipping-cost
- Method: POST
- Description: Calculate the shipping cost based on city ID, weight, origin, and destination.
- Request Body:
```
{
    "ship_origin":1,
    "ship_destination":5,
    "weight":1,
    "courier":"jne"
}
```
- Response
```
{
    "origin": 1,
    "destination": 5,
    "weight": 1,
    "costs": [
        {
            "service": "OKE",
            "description": "Ongkos Kirim Ekonomis",
            "cost": 18000,
            "etd": "4-6"
        },
        {
            "service": "REG",
            "description": "Layanan Reguler",
            "cost": 20000,
            "etd": "2-3"
        }
    ]
}
```