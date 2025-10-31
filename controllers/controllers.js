const path = require("node:path");
const db = require('../db/queries')
function getHomePage(req, res) {
    res.sendFile(path.join(__dirname, '../views/homepage.html'));
};

async function getCategories(req, res) {
    //const categories = await db.getCategories();
    const categories  = ['Blender, The Odin'] 
    res.render("categories", {categories})
}

module.exports = {
    getHomePage,
    getCategories
}