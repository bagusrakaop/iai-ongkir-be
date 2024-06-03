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