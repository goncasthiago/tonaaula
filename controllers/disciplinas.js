const Disciplina = require("../models/Disciplina");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../errors");

//const asyncWrapper = require('../middleware/asyncWrapper')
//const { createCustomError } = require('../errors/custom-errors')

/**
 * @swagger
 * /api/v1/disciplinas/:
 *  get:
 *      tags:
 *      - "Disciplinas"
 *      summary: Busque todas as disciplinas
 *      security: []
 *      description: Use para requisitar todas as disciplinas
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
const buscaDisciplinas = async (req, res) => {
  const disciplinas = await Disciplina.find({});
  res
    .status(StatusCodes.OK)
    .json({ success: true, data: disciplinas, count: disciplinas.length });
};

/**
 * @swagger
 * /api/v1/disciplinas/{idDisciplina}:
 *  get:
 *      tags:
 *      - "Disciplinas"
 *      summary: Busque disciplina por Id
 *      security: []
 *      description: Use para requisitar uma disciplina pelo id
 *      parameters:
 *      - name: idDisciplina
 *        in: path
 *        required: true
 *        schema:
 *          type: string
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
const buscaDisciplinaById = async (req, res, next) => {
  const { id: disciplinaID } = req.params;
  const disciplina = await Disciplina.findOne({ _id: disciplinaID });
  if (!disciplina) {
    return next(
      createCustomError(`Nenhuma disciplina com o id ${disciplinaID}`, 404)
    );
    //return res.status(404).json({success: false, data: [], msg:`Nenhuma disciplina com o id ${disciplinaID}`})
  }
  res.status(201).json({ success: true, data: [{ disciplina }] });
};

//      security:
//          - bearerAuth: []

/**
 * @swagger
 * /api/v1/disciplinas/:
 *  post:
 *      tags:
 *      - "Disciplinas"
 *      summary: Crie uma nova disciplina
 *      description: Use para criar uma nova disciplina
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
 *                          nome:
 *                              type: string
 *                  example:
 *                      nome: Javascript
 *          required: true
 *      responses:
 *          '201':
 *              description: Disciplina adicionada
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

const criaDisciplina = async (req, res, next) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { nome } = req.body;
  if (!nome) {
    return next(createCustomError("Favor enviar o nome da disciplina", 400));
    //    return res.status(400).json({success: false, data: [], msg:'Favor enviar o nome da disciplina'})
  }
  const disciplina = await Disciplina.create({ nome });
  res.status(201).json({ success: true, data: [{ disciplina }] });
};

/**
 * @swagger
 * /api/v1/disciplinas/{idDisciplina}:
 *  patch:
 *      tags:
 *      - "Disciplinas"
 *      summary: Atualize uma disciplina pelo Id
 *      description: Use para atualizar o nome de uma disciplina
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      parameters:
 *      - name: idDisciplina
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
 *                          nome:
 *                              type: string
 *                  example:
 *                      nome: Javascript
 *          required: true
 *      responses:
 *          '200':
 *              description: Disciplina atualizada
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
const atualizaDisciplina = async (req, res, next) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { id: disciplinaID } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return next(createCustomError("Favor enviar o nome da disciplina", 400));
    //    return res.status(400).json({success: false, data: [], msg: 'Favor enviar o nome da disciplina'})
  }

  const disciplina = await Disciplina.findByIdAndUpdate(
    { _id: disciplinaID },
    { nome },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!disciplina) {
    return next(createCustomError(`Id ${disciplinaID} não encontrado`, 404));
    //return res.status(404).json({success: false, data: [], msg: `Id ${disciplinaID} não encontrado`})
  }

  res
    .status(200)
    .json({ success: true, data: disciplina, msg: "Disciplina atualizada" });
};
/**
 * @swagger
 * /api/v1/disciplinas/{idDisciplina}:
 *  delete:
 *      tags:
 *      - "Disciplinas"
 *      summary: Apague uma disciplinas
 *      description: Use para deletar uma disciplina com o seu id
 *      parameters:
 *          - name: idDisciplina
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
const apagaDisciplina = async (req, res, next) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { id: disciplinaID } = req.params;
  const disciplina = await Disciplina.findOneAndDelete({ _id: disciplinaId });
  if (!disciplina) {
    return next(createCustomError(`Id ${disciplinaId} não encontrado`, 404));
    //return res.status(404).json({success:false, data: [], msg: `Id ${disciplinaId} não existe`})
  }
  res
    .status(200)
    .json({
      success: true,
      data: disciplina,
      msg: "Disciplina deletada com sucesso!",
    });
};

module.exports = {
  buscaDisciplinas,
  buscaDisciplinaById,
  criaDisciplina,
  atualizaDisciplina,
  apagaDisciplina,
};
