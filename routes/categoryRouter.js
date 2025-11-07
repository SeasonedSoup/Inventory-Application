const { Router } = require('express');

const categoryRouter = Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', categoryController.getCategories);
categoryRouter.get('/:id/update', categoryController.updateCategoryGet);
categoryRouter.get('/:id', categoryController.getCategoryDetail);

categoryRouter.post('/:id/update', categoryController.updateCategoryPost);
categoryRouter.post('/', categoryController.createCategoryPost);
categoryRouter.post('/:id/delete', categoryController.deleteCategory);

module.exports = categoryRouter;