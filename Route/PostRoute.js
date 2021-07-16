const express = require('express');
const router = express.Router();
const postController = require('../Controller/PostController');

router.get('/',postController.index);
router.post('/',postController.store);
router.put('/:id',postController.update);
router.delete('/:id',postController.deleted);

module.exports = router;