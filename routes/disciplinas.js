const express = require('express');
const { criaDisciplina, buscaDisciplinas, buscaDisciplinaById, apagaDisciplina, atualizaDisciplina } = require('../controllers/disciplinas');
const router = express.Router();

const authenticateUser = require('../middleware/authentication')

router.route('/').post(authenticateUser, criaDisciplina).get(buscaDisciplinas)
router.route('/:id').get(buscaDisciplinaById).delete(authenticateUser, apagaDisciplina).patch(authenticateUser, atualizaDisciplina)

module.exports = router;
