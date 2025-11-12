const db = require('../db/queries');
const path = require('path');
const {validationResult, matchedData} = require('express-validator');
const {validateCategory} = require('../validators/validators');

async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    res.render("categories", {categories});
}

async function getCategoryDetail(req,res) {
    const categoryId = req.params.categoryId
    const category = await db.getCategory(categoryId);

    const resources = await db.getResources(categoryId);
    res.render("categoryDetail", {category, resources});
}

function createCategoryGet(req, res) {
    res.render("createCategory", {
        category: {},
        errors: [],
    });
}

const createCategoryPost = [
    validateCategory, async (req, res) => {

    const errors = validationResult(req);
     //fetch sanitized data
    const category = matchedData(req);

    if(!errors.isEmpty()) {
        return res.status(400).render("createCategory", {
            category: category,
            errors: errors.array(),
        });
    }
    const result = await db.insertCategory(
        category.title,
        category.description
    );
    console.log(result);
    res.redirect('/categories');
    }
];

//UPDATES
async function updateCategoryGet(req, res) {
    const categoryId = req.params.categoryId;
    const category = await db.getCategory(categoryId)
    res.render('updateCategory', {category})
}

async function updateCategoryPost(req, res) {
    const category = req.body 
    const categoryId = req.params.categoryId

    const result = await db.updateCategory(category, categoryId)
    console.log(result)
    res.redirect('/categories')
}

async function deleteCategory(req, res) {
    const categoryId = req.params.categoryId;

    const result = await db.deleteCategory(categoryId);
    console.log(result);
    res.redirect('/categories');
}

module.exports = {
    getCategories,
    getCategoryDetail,
    createCategoryGet,
    createCategoryPost,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategory
}
