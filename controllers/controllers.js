const path = require("node:path");
const db = require('../db/queries');

function getHomePage(req, res) {
    res.sendFile(path.join(__dirname, '../views/homepage.html'));
};

async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    res.render("categories", {categories});
}
//this will need validation at some point
async function getCategoryDetail(req,res) {
    const id = req.params.id
    const category = await db.getCategory(id)

    const resources = await db.getResources(id)
    res.render("categoryDetail", {category, resources})
}

async function getResourceDetail(req, res) {
    const {categoryId, id} = req.params;

    const resource = await db.getResourceDetail(id);
    res.render("resourceDetail", {resource, categoryId});
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

async function createResourcePost(req, res) {
    const resource = req.body;

    const result = await db.insertResource(
        resource.title, 
        resource.description, 
        resource.type,
        resource.category_id
    )

    console.log(result);
    res.redirect(`/categories/${resource.category_id}`)
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

//DELETE
async function deleteCategory(req, res) {
    const id = req.params.id;

    const result = await db.deleteCategory(id);
    console.log(result);
    res.redirect('/categories');
}

async function deleteResource(req, res) {
    const {categoryId, id} = req.params;

    const result = await db.deleteResource(id);
    console.log(result);

    res.redirect(`/categories/${categoryId}`);
}

module.exports = {
    getHomePage,
    getCategories,
    getCategoryDetail,
    getResourceDetail,
    createCategoryPost,
    createResourcePost,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategory,
    deleteResource,
}