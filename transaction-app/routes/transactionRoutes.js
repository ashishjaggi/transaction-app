const express = require('express');
const router = express.Router();

const transaction = require('../controllers/transaactionController')

router.get('/transaction', transaction.getAllTransaction);

router.post('/addTransaction', transaction.addTransaction);

module.exports= router;