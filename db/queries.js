const pool = require('./pool');

async function getAllCategories() {
    const { rows } = pool.query(`SELECT title FROM categories`);
    return rows;
}

async function getCategory(id) {
    const { rows } = pool.query(`SELECT * FROM categories WHERE id = ($1)`, [id]);
    return rows[0];
}

//both functions before and ahead of this line is simplified for now this could be a join statement

async function getResources(categoryId) {
    const { rows } = pool.query(`SELECT title, type FROM resources WHERE category_id = ($1)`, [categoryId]);
    return rows;
}

async function getResourceDetail(id) {
    const { rows } = pool.query(`SELECT * FROM resources WHERE id = ($1)`, [id]);
    return rows[0];
}
module.exports = {
    getAllCategories,
    getCategory,
    getResources,
    getResourceDetail,
}