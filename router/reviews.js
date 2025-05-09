const express = require('express')
const router = express.Router()
const controllerReviews = require('../controllers/controller')

router.get('/', controllerReviews.index);

router.post('/', controllerReviews.store);

router.delete('/:id', controllerReviews.destroy);

router.put("/:id", controllerReviews.update);


module.exports = router;