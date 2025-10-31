const pool = require('./pool');

async function getAllCategories() {
    const { rows } = pool.query(`SELECT title FROM categories`);
    return rows;
}

module.exports = getAllCategories;