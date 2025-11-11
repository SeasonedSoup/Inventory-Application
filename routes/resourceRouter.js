const { Router } = require('express');
const resourceController = require('../controllers/resourceController');
//enables getting the parent routers parameters
const resourceRouter = Router({mergeParams: true});

resourceRouter.get('/:productId/update', resourceController.updateResourceGet);
resourceRouter.get('/:productId', resourceController.getResourceDetail);

resourceRouter.post('/:productId/update', resourceController.updateResourcePost);
resourceRouter.post('/:productId', resourceController.createResourcePost);

resourceRouter.post('/:productId/delete', resourceController.deleteResource);

module.exports = resourceRouter;