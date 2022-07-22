const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/', taskController.show);

router.get('/', taskController.store);

router.delete('/', taskController.destroy);

module.exports = router;
