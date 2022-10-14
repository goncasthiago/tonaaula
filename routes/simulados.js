const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')

const {criaSimulado, buscaSimulado, buscaSimuladoPorId, atualizaSimulado, apagaSimulado, buscaQuestoesSimuladoPorId} = require('../controllers/simulados')

router.route('/').post(authenticateUser, criaSimulado).get(buscaSimulado)
router.route('/:idSimulado').get(buscaSimuladoPorId).patch(authenticateUser, atualizaSimulado).delete(authenticateUser, apagaSimulado)
router.route('/:idSimulado/questoes').get(buscaQuestoesSimuladoPorId)
module.exports = router;