const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.get('/', userController.show);
router.post('/login', userController.login);
router.post('/register', userController.store);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.destroy);

module.exports = router;
