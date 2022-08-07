const express = require('express');
const userController = require('../controllers/userController');

const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, userController.show);
router.post('/login', userController.login);
router.post('/register', userController.store);
router.get('/logout', auth, userController.logout);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.destroy);

module.exports = router;
