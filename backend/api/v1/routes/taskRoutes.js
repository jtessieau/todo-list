const express = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth, taskController.show);
router.post('/', taskController.store);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.destroy);

module.exports = router;
