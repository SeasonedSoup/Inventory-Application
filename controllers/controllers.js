const path = require("node:path");
const db = require('../db/queries');

function getHomePage(req, res) {
    res.sendFile(path.join(__dirname, '../views/homepage.html'));
};

async function getCategories(req, res) {
    //const categories = await db.getCategories();
    const categories  = ['Blender, The Odin'] 
    res.render("categories", {categories});
}
//this will need validation at some point
async function getCategoryDetail(req,res) {
    const id = req.params.id
    const category = await db.getCategory(id)

    const resources = await db.getResources(id)
    res.render("category", {category, resources})
}

async function getResourceDetail(req, res) {
    const id = req.params.id;

    const resource = await db.getResourceDetail(id);
    res.render("resourceDetail", {resource});
}

module.exports = {
    getHomePage,
    getCategories,
    getCategoryDetail,
    getResourceDetail
}