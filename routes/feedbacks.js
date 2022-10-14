const express = require('express');
const { criaFeedback, buscaFeedback } = require('../controllers/feedback');
const router = express.Router();

router.route('/').post(criaFeedback).get(buscaFeedback)

module.exports = router;
