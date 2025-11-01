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
    res.render("category", {category})
}

async function getResources(req, res) {

} 

async function getResourceDetail(req, res) {
    
}

module.exports = {
    getHomePage,
    getCategories,
    getCategoryDetail
}