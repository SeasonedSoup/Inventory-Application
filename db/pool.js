const { Pool } = require('pg');

require('dotenv').config();

module.exports = new Pool({
    host: 'localhost',
    user: process.env.DB_USER,
    database: 'resource_notes',
    password: process.env.DB_PASSWORD,
});