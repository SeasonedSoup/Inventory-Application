const db = require('../db/queries');

async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    res.render("categories", {categories});
}

async function getCategoryDetail(req,res) {
    const id = req.params.id
    const category = await db.getCategory(id)

    const resources = await db.getResources(id)
    res.render("categoryDetail", {category, resources})
}


async function createCategoryPost(req, res) {
    const category = req.body;
    const result = await db.insertCategory(
        category.title,
        category.description
    );

    console.log(result);
    res.redirect('/categories');
}


//UPDATES
async function updateCategoryGet(req, res) {
    const id = req.params.categoryId;
    const category = await db.getCategory(id)
    res.render('updateCategory', {category})
}

async function updateCategoryPost(req, res) {
    const category = req.body 
    const id = req.params.id

    const result = await db.updateCategory(category, id)
    console.log(result)
    res.redirect('/categories')
}

async function deleteCategory(req, res) {
    const id = req.params.id;

    const result = await db.deleteCategory(id);
    console.log(result);
    res.redirect('/categories');
}

module.exports = {
    getCategories,
    getCategoryDetail,
    createCategoryPost,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategory
}
