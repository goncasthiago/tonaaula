const express = require('express');
const { criaQuestao, buscaQuestao, apagaQuestao, buscaQuestaoporId, atualizaQuestao } = require('../controllers/questoes');
const router = express.Router();
const authenticateUser = require('../middleware/authentication')

router.route('/').post(authenticateUser, criaQuestao).get(buscaQuestao)
router.route('/:id').get(buscaQuestaoporId).delete(authenticateUser, apagaQuestao).patch(authenticateUser, atualizaQuestao)

module.exports = router;
