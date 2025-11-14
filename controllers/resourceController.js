const db = require('../db/queries');
const {validateResource } = require('../validators/validators');
const {validationResult, matchedData} = require('express-validator');

async function getResourceDetail(req, res) {
    const {categoryId, resourceId} = req.params;

    const resource = await db.getResourceDetail(resourceId);
    res.render("resourceDetail", {resource, categoryId});
}

function createResourceGet(req, res) {
    const { categoryId } = req.params;
    res.render("createResource", {
        categoryId: categoryId,
        resource: {},
        errors: []
    });
}

const createResourcePost = [ 
    validateResource, async (req, res) => {
        const { categoryId } = req.params;
        const errors = validationResult(req);
        const resource = matchedData(req);

        if(!errors.isEmpty()) {
            return res.status(404).render("createResource", {
                categoryId: categoryId,
                resource: resource,
                errors: errors.array() 
            });
        }

        const result = await db.insertResource(
            resource.title, 
            resource.description, 
            resource.type,
            categoryId
        )
        console.log(result);
        res.redirect(`/categories/${categoryId}`)
    }
];

async function updateResourceGet(req, res) {
    const {categoryId, resourceId} = req.params
    const resource = await db.getResourceDetail(resourceId)
    
    res.render('updateResource', {
        categoryId: categoryId, 
        resource: resource,
        errors: []
    });
}


const updateResourcePost = [
    validateResource, async(req, res) => {
    const errors = validationResult(req);
    const resource = matchedData(req);
    const categoryId = req.params.categoryId;
    
    if (!errors.isEmpty()) {
        const resourceId = req.params.resourceId
        const prevResource = await db.getResourceDetail(resourceId);
        return res.status(404).render('updateResource', {
            categoryId: categoryId,
            resource: prevResource,
            errors: errors.array()
        });
    }
    const resourceId = req.params.resourceId;

    const result = await db.updateResource(resource, resourceId)
    console.log(result);

    res.redirect(`/categories/${categoryId}`)
    }
];
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