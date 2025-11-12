const { Router } = require('express');
const controller = require('../controllers/controllers');
const categoryRoute = require('../routes/categoryRouter')
const router = Router();

router.use('/categories', categoryRoute);
router.get('/', controller.getHomePage);

module.exports = router;

