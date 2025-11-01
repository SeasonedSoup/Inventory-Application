const { Router } = require('express');
const controller = require('../controllers/controllers');
const router = Router();

router.get('/', controller.getHomePage);
router.get('/categories', controller.getCategories);
router.get('/categories/:id', controller.getCategoryDetail);

module.exports = router;

