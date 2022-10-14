const mongoose = require('mongoose')

const SimuladoSchema = new mongoose.Schema({
    questoes : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Questoes',
        required: [ true, "Providenciar as questões"]
    },
    professor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [ true, 'Professor não recebido']
    },
    nome:{
        type: String,
        minlength: 3,
        required: [ true, 'Providenciar o nome do Simulado']
    },
    descricao: {
        type: String,
        minlength: 3,
        required: [true, 'Providenciar a descrição do simulados']
    },
    duracao: {
        type: Number,
        default: 100,
    },
    datafim: { 
        type: Date,
        required: [true, 'Informe a data de finalização do simulado']
    },

},{timestamps: true})
module.exports = mongoose.model('Simulado', SimuladoSchema)