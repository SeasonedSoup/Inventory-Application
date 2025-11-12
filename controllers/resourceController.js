const db = require('../db/queries');
const {validateResource } = require('../validators/validators');

async function getResourceDetail(req, res) {
    const {categoryId, resourceId} = req.params;

    const resource = await db.getResourceDetail(resourceId);
    res.render("resourceDetail", {resource, categoryId});
}

function createResourceGet(req, res) {
    const { categoryId } = req.params;
    res.render("createResource", {categoryId});
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
    const {categoryId, resourceId} = req.params
    const resource = await db.getResourceDetail(resourceId)
    
    res.render('updateResource', {categoryId, resource})
}


async function updateResourcePost(req, res) {
    const resource = req.body; 

    const categoryId = req.params.categoryId
    const resourceId = req.params.resourceId;

    const result = await db.updateResource(resource, resourceId)
    console.log(result);

    res.redirect(`/categories/${categoryId}`)
}

async function deleteResource(req, res) {
    const {categoryId, resourceId} = req.params;

    const result = await db.deleteResource(resourceId);
    console.log(result);

    res.redirect(`/categories/${categoryId}`);
}

module.exports = {
    getResourceDetail,
    createResourceGet,
    createResourcePost,
    updateResourceGet,
    updateResourcePost,
    deleteResource,
}