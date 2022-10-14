const mongoose = require('mongoose')

const DisciplinaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true,'Favor enviar o nome da Disciplina'],
        trim: true,
        maxLength:[50, 'O nome da disciplina não deve ser maior que 50 palavras']
//      default: 'Matemática'
    },
    assuntos: {
        type: [String],
        trim: true
    }

})

module.exports = mongoose.model('Disciplina', DisciplinaSchema)