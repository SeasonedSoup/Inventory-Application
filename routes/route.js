const { Router } = require('express');
const controller = require('../controllers/controllers');
const router = Router();

router.get('/', controller.getHomePage);
router.get('/categories', controller.getCategories);
router.get('/categories/:id', controller.getCategoryDetail);
router.get('/categories/:categoryId/:id', controller.getResourceDetail);

router.post('/categories', controller.createCategoryPost);
router.post('/categories/:id', controller.createResourcePost);

router.post('/categories/:id/delete', controller.deleteCategory);
router.post('/categories/:categoryId/:id/delete', controller.deleteResource)


module.exports = router;

