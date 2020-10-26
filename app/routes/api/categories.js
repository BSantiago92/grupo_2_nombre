const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/categoriesController');

router.get('/', controller.index);
router.get('/:id', controller.detail);




module.exports = router;