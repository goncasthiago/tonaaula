const express = require('express');
const { createPersonPostman, updatePerson, deletePerson, getPeople, createPerson, regSim } = require('../controllers/people');
const router = express.Router();

//router.get('/',  getPeople )
//router.post('/', createPerson)
//router.post('/postman', createPersonPostman)
//router.put('/:id', updatePerson)
//router.delete('/:id',deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
router.route('/:id/:simulado').put(regSim)

module.exports = router;
