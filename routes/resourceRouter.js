const { Router } = require('express');
const resourceController = require('../controllers/resourceController');
//enables getting the parent routers parameters
const resourceRouter = Router({mergeParams: true});

resourceRouter.get('/:resourceId/update', resourceController.updateResourceGet);
resourceRouter.get('/:resourceId', resourceController.getResourceDetail);

resourceRouter.post('/:resourceId/update', resourceController.updateResourcePost);
resourceRouter.post('/', resourceController.createResourcePost);

resourceRouter.post('/:resourceId/delete', resourceController.deleteResource);

module.exports = resourceRouter;