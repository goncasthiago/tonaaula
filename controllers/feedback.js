const Feedback = require("../models/Feedback");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../errors");

/**
 * @swagger
 * /api/v1/feedbacks/:
 *  get:
 *      tags:
 *      - "Feedbacks"
 *      summary: Busca os feedbacks dos usuários
 *      description: Use para buscar os feedbacks deixados na plataforma pelos usuários
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
 *                                  'tipo':
 *                                      type: string
 *                                  'mensagem':
 *                                      type: string
 *                                  'autor':
 *                                      type: string
 *                                  'createdAt':
 *                                      type: string
 *                                  'updatedAt':
 *                                      type: string
 *                                  '__v':
 *                                      type: integer
 *          '500':
 *              description: Falha
 *
 *
 */
const buscaFeedback = async (req, res) => {
  const feedback = await Feedback.find({});
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: feedback, quantidade: feedback.length });
};

/**
 * @swagger
 * /api/v1/feedbacks/:
 *  post:
 *      tags:
 *      - "Feedbacks"
 *      summary: Crie uma novo Feedback
 *      description: Use para criar um novo Feedback da plataforma
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
 *                          tipo:
 *                              type: string
 *                          mensagem:
 *                              type: objectid
 *                  example:
 *                      tipo: Quantidade de alternativas
 *                      mensagem: As perguntas estão com muitas alternativas
 *          required: true
 *      responses:
 *          '201':
 *              description: Feedback adicionada
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
 *                                  'tipo':
 *                                      type: string
 *                                  'mensagem':
 *                                      type: string
 *                                  'autor':
 *                                      type: string
 *                                  'createdAt':
 *                                      type: string
 *                                  'updatedAt':
 *                                      type: string
 *                                  '__v':
 *                                      type: integer
 *          '500':
 *              description: Falha
 *
 *
 */

const criaFeedback = async (req, res, next) => {
  //console.log(req.body)
  const {
    user: { userId },
  } = req;

  const { tipo, mensagem } = req.body;
  //console.log('feedback', userId, tipo, mensagem)
  if (!tipo || !mensagem) {
    throw new BadRequestError("Favor enviar todas as informações necessárias");
  }
  const feedback = await Feedback.create({ ...req.body, autor: userId });
  res.status(201).json({ success: true, data: [{ feedback }] });
};

module.exports = {
  buscaFeedback,
  criaFeedback,
};
