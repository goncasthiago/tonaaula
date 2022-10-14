const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const SimuladoRespondido = require("../models/SimuladoRespondido");
const Questao = require("../models/Questao");

//const asyncWrapper = require('../middleware/asyncWrapper')
//const { createCustomError } = require('../errors/custom-errors')

/**
 * @swagger
 * /api/v1/simuladoRespondido/:
 *  get:
 *      tags:
 *      - "Simulados Respondidos"
 *      summary: Busque todas os simulados Respondidos
 *      security: []
 *      description: Use para requisitar todas as simulados Respondidos
 *      responses:
 *          '200':
 *              description: Sucesso
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  '_id':
 *                                      type: string
 *                                  'nome':
 *                                      type: string
 *                                  '__v':
 *                                      type: integer
 *
 *
 *
 *
 *          '500':
 *              description: Falha
 *
 *
 */

const buscaSimuladoByUser = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId });

  const simulados = await Questao.find({ aluno: user._id }).populate("aluno");
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: simulados, count: simulados.length });
};

/**
 * @swagger
 * /api/v1/simuladoRespondido/:
 *  post:
 *      tags:
 *      - "Simulados Respondidos"
 *      summary: Crie um novo simulado respondido
 *      description: Use para criar um novo simulado respondido
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      requestBody:
 *          description: ''
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          idSimulado:
 *                              type: string
 *                          nome:
 *                              type: string
 *                          userId:
 *                              type: string
 *                          alternativas:
 *                              type: array
 *                          comentarios:
 *                              type: array
 *                          respondida:
 *                              type: boolean
 *                          aluno:
 *                              type: string
 *                          data_fim:
 *                              type: Date
 *                          data_inicio:
 *                              type: Date
 *                          data:
 *                               type: Date
 *                          qtd_questoes:
 *                             type: integer
 *                          professor:
 *                             type: string
 *                  example:
 *          required: true
 *      responses:
 *          '201':
 *              description: Questao adicionada
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  '_id':
 *                                      type: string
 *                                  'nome':
 *                                      type: string
 *                                  '__v':
 *                                      type: integer
 *          '500':
 *              description: Falha
 *
 *
 */

const createTestAnswered = async (req, res) => {
  let simuladoRespondido = await SimuladoRespondido.create({
    ...req.body,
  });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, data: simuladoRespondido });
};

module.exports = {
  buscaSimuladoByUser,
  createTestAnswered,
};
