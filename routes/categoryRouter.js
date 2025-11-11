const { Router } = require('express');

const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', categoryController.getCategories);
categoryRouter.get('/:categoryId/update', categoryController.updateCategoryGet);
categoryRouter.get('/:categoryId', categoryController.getCategoryDetail);

categoryRouter.post('/:categoryId/update', categoryController.updateCategoryPost);
categoryRouter.post('/', categoryController.createCategoryPost);
categoryRouter.post('/:categoryId/delete', categoryController.deleteCategory);

module.exports = categoryRouter;