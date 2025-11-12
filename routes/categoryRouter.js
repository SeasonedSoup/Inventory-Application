const { Router } = require('express');

const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');
//use within controller and merge the params
const resourceRoute = require('../routes/resourceRouter');

categoryRouter.use('/:categoryId/resources', resourceRoute);

categoryRouter.get('/', categoryController.getCategories);
categoryRouter.get('/create', categoryController.createCategoryGet)
categoryRouter.get('/:categoryId/update', categoryController.updateCategoryGet);
categoryRouter.get('/:categoryId', categoryController.getCategoryDetail);

categoryRouter.post('/:categoryId/update', categoryController.updateCategoryPost);
categoryRouter.post('/create', categoryController.createCategoryPost);
categoryRouter.post('/:categoryId/delete', categoryController.deleteCategory);

module.exports = categoryRouter;