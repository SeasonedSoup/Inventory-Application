const { Router } = require('express');
const controller = require('../controllers/controllers');
const router = Router();

router.get('/', controller.getHomePage);
router.get('/categories', controller.getCategories);
router.get('/categories/:id', controller.getCategoryDetail);
router.get('/resources/:id', controller.getResourceDetail);

router.post('/categories', controller.createCategoryPost);
router.post('/categories/:id', controller.createResourcePost);

module.exports = router;

