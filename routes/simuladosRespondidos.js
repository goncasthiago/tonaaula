const express = require('express');
const { buscaSimuladoByUser, createTestAnswered } = require('../controllers/simuladoRespondido');
const router = express.Router();

router.route("/").post(createTestAnswered).get(buscaSimuladoByUser);

module.exports = router;