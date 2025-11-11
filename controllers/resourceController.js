const db = require('../db/queries');

async function getResourceDetail(req, res) {
    const {categoryId, productId} = req.params;

    const resource = await db.getResourceDetail(productId);
    res.render("resourceDetail", {resource, categoryId});
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

async function updateResourceGet(req, res) {
    const {categoryId, productId} = req.params
    const resource = await db.getResourceDetail(productId)
    
    res.render('updateResource', {categoryId, resource})
}


async function updateResourcePost(req, res) {

}

async function deleteResource(req, res) {
    const {categoryId, productId} = req.params;

    const result = await db.deleteResource(productId);
    console.log(result);

    res.redirect(`/categories/${categoryId}`);
}

module.exports = {
    getResourceDetail,
    createResourcePost,
    updateResourceGet,
    updateResourcePost,
    deleteResource,
}