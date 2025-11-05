const pool = require('./pool');

async function getAllCategories() {
    const { rows } = await pool.query(`SELECT title FROM categories`);
    return rows;
}

async function getCategory(id) {
    const { rows } = await pool.query(`SELECT * FROM categories WHERE id = ($1)`, [id]);
    return rows[0];
}

//both functions before and ahead of this line is simplified for now this could be a join statement
async function getResources(categoryId) {
    const { rows } = await pool.query(`SELECT title, type FROM resources WHERE category_id = ($1)`, [categoryId]);
    return rows;
}

async function getResourceDetail(id) {
    const { rows } = await pool.query(`SELECT * FROM resources WHERE id = ($1)`, [id]);
    return rows[0];
}

//POSTS / INSERTS

async function insertCategory(title, description) {
    const result = await pool.query(`INSERT INTO categories (title, description) VALUES ($1, $2) `, [title, description]);
    return result.rows[0];
}

async function insertResource(title, description, type, category_id) {
    const result = await pool.query(`INSERT INTO resources (title, description, type, category_id) VALUES ($1, $2, $3, $4)`
        , [title, description, type, category_id]);

    return result.rows[0]
}

//DELETES

async function deleteCategory(id) {
    const result = await pool.query(`DELETE FROM categories WHERE id = ($1)`, [id]);
    return result;
}

async function deleteResource(id) {
    const result = await pool.query(`DELETE FROM resources WHERE id = ($1)`, [id]);
    return result
}

async function updateCategory(category, id) {
    const result = await pool.query(`UPDATE category SET title = ($1), description = ($2) WHERE id = ($3)`, 
    [category.title, category.description, id])
    return result;
}


async function updateResource(resource, id) {
    const result = await pool.query(`UPDATE category SET title = ($1), description = ($2), type = ($3) WHERE id = ($4), `, 
    [resource.title, resource.description, id])
    return result;
}

module.exports = {
    getAllCategories,
    getCategory,
    getResources,
    getResourceDetail,
    insertCategory,
    insertResource,
    updateCategory,
    updateResource,
    deleteCategory,
    deleteResource
}