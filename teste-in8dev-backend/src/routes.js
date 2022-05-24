const express = require('express');

const PersonController = require('./controllers/PersonController');

const router = express.Router();

router.post('/person', PersonController.store);
router.get('/persons', PersonController.getAll);

module.exports = router;