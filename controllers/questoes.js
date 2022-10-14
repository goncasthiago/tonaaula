const Questao = require("../models/Questao");
const Disciplina = require("../models/Disciplina");

const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
} = require("../errors");

//const asyncWrapper = require('../middleware/asyncWrapper')
//const { createCustomError } = require('../errors/custom-errors')

/**
 * @swagger
 * /api/v1/questoes/:
 *  get:
 *      tags:
 *      - "Questoes"
 *      summary: Busque todas as questões
 *      security: []
 *      description: Use para requisitar todas as questões
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
const buscaQuestao = async (req, res) => {
  const questoes = await Questao.find({}).populate("disciplina");
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: questoes, count: questoes.length });
};

/**
 * @swagger
 * /api/v1/questoes/{idquestao}:
 *  get:
 *      tags:
 *      - "Questoes"
 *      summary: Busque questão por Id
 *      description: Use para requisitar uma questão pelo id
 *      security: []
 *      parameters:
 *          - name: idquestao
 *            in: path
 *            required: true
 *            schema:
 *              type: string
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
 *          '500':
 *              description: Falha
 *
 *
 */
const buscaQuestaoporId = async (req, res) => {
  const { id: questaoID } = req.params;
  const questao = await Questao.findOne({ _id: questaoID }).populate(
    "disciplina"
  );
  if (!questao) {
    throw new BadRequestError(`Nenhuma questão com o id ${questaoID}`);
    //return res.status(404).json({success: false, data: [], msg:`Nenhuma questao com o id ${questaoID}`})
  }

  const disciplinas = await Disciplina.findOne({ _id: questao.disciplina });

  res.status(201).json({ success: true, data: [{ questao }] });
};

/**
 * @swagger
 * /api/v1/questoes/:
 *  post:
 *      tags:
 *      - "Questoes"
 *      summary: Crie uma nova questão
 *      description: Use para criar uma nova questão
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
 *                          enunciado:
 *                              type: string
 *                          disciplina:
 *                              type: string
 *                          assunto:
 *                              type: string
 *                          alternativas:
 *                              type: array
 *                          comentarios:
 *                              type: array
 *                  example:
 *                      enunciado: Quanto é 1 + 1
 *                      disciplina: Matemática
 *                      assunto: Matemática
 *                      alternativas: [{enunciado: 2, isSelected: false, isCorrect: false}, {enunciado: 3, isSelected: false, isCorrect: false}, {enunciado: 4, isSelected: false, isCorrect: false}, {enunciado: 5, isSelected: false, isCorrect: false}]
 *                      comentarios: "A resposta correta é 2"
 *          required: true
 *      responses:
 *          '201':
 *              description: questao adicionada
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

const criaQuestao = async (req, res) => {
  const {
    user: { userId, profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { enunciado, alternativas, disciplina, comentarios, assunto, autor } =
    req.body;
  if (
    (!enunciado || !alternativas || !disciplina || !comentarios || !assunto,!autor)
  ) {
    throw new BadRequestError("Favor enviar todas as informações necessárias");
  }
  const questao = await Questao.create({ ...req.body, autor: userId });
  res.status(201).json({ success: true, data: [{ questao }] });
};

/**
 * @swagger
 * /api/v1/questoes/{idquestao}:
 *  patch:
 *      tags:
 *      - "Questoes"
 *      summary: Atualize uma questão pelo Id
 *      description: Use para atualizar o nome de uma questão
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      parameters:
 *      - name: idquestao
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *      requestBody:
 *          description: ''
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          enunciado:
 *                              type: string
 *                          disciplina:
 *                              type: string
 *                          assunto:
 *                              type: string
 *                          alternativas:
 *                              type: array
 *                          comentarios:
 *                              type: array
 *                  example:
 *                      enunciado: Quanto é 1 + 1
 *                      disciplina: 6270498cfb5071c3d967072f
 *                      assunto: Matemática
 *                      alternativas: [{enunciado: 2, isSelected: false, isCorrect: false}, {enunciado: 3, isSelected: false, isCorrect: false}, {enunciado: 4, isSelected: false, isCorrect: false}, {enunciado: 5, isSelected: false, isCorrect: false}]
 *                      comentarios: "A resposta correta é 2"
 *          required: true
 *      responses:
 *          '200':
 *              description: questao atualizada
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
 *                                  "enunciado":
 *                                      type: string
 *                                  "disciplina":
 *                                      type: objectid
 *                                  "alternativas":
 *                                      type: array
 *                                  "comentarios":
 *                                      type: array
 *                                  "correta":
 *                                      type: Number
 *                      msg:
 *                          type: string
 *          '500':
 *              description: Falha
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      data:
 *                          type: array
 *                      msg:
 *                          type: string
 *
 *
 */
const atualizaQuestao = async (req, res) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { id: questaoID } = req.params;
  const { enunciado, alternativas, disciplina, comentarios, correta } =
    req.body;
  if (!enunciado || !alternativas || !disciplina || !comentarios || !correta) {
    throw new BadRequestError("Favor enviar todas as informações necessárias");
  }

  const questao = await Questao.findByIdAndUpdate(
    { _id: questaoID },
    { ...req.body },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!questao) {
    throw new BadRequestError(`Id ${questaoID} não encontrado`);
  }

  res
    .status(200)
    .json({ success: true, data: questao, msg: "Questao atualizada" });
};
/**
 * @swagger
 * /api/v1/questoes/{idquestao}:
 *  delete:
 *      tags:
 *      - "Questoes"
 *      summary: Apague uma questão
 *      description: Use para deletar uma questão com o seu id
 *      parameters:
 *          - name: idquestao
 *            in: path
 *            required: true
 *            schema:
 *              type: string
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
 *          '500':
 *              description: Falha
 *
 *
 */
const apagaQuestao = async (req, res) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { id: questaoID } = req.params;
  const questao = await Questao.findOneAndDelete({ _id: questaoID });
  if (!questao) {
    throw new BadRequestError(`Id ${questaoID} não encontrado`);
  }
  res.status(200).json({
    success: true,
    data: questao,
    msg: "Questão deletada com sucesso!",
  });
};

module.exports = {
  buscaQuestao,
  buscaQuestaoporId,
  criaQuestao,
  atualizaQuestao,
  apagaQuestao,
};
