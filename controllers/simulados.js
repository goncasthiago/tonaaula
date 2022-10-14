const Simulado = require("../models/Simulado");
const Questao = require("../models/Questao");
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
 * /api/v1/simulados/:
 *  get:
 *      tags:
 *      - "Simulados"
 *      summary: Busque todos simulados
 *      description: Use para requisitar todos os simulados
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
 *                                  "nome":
 *                                      type: string
 *                                  "id":
 *                                      type: objectid
 *                      count:
 *                          type: number
 *          '500':
 *              description: Falha
 *
 *
 */
const buscaSimulado = async (req, res) => {
  const simulados = await Simulado.find({}).populate("questoes");
  res.status(StatusCodes.OK).json({
    success: true,
    data: [
      simulados.map((simulado) => {
        return {
          nome: simulado.nome,
          idSimulado: simulado._id,
          descricao: simulado.descricao,
          duracao: simulado.duracao,
          data_fim: simulado.datafim,
          data_criacao: simulado.createdAt,
          qtd_questoes: simulado.questoes.length
        };
      }),
    ],
    count: simulados.length,
  });
};

/**
 * @swagger
 * /api/v1/simulados/{idSimulado}:
 *  get:
 *      tags:
 *      - "Simulados"
 *      summary: Busque simulado por Id
 *      description: Use para requisitar um simulado pelo id
 *      security: []
 *      parameters:
 *          - name: idSimulado
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
 *                                  "simulado":
 *                                      type: string
 *                                  "_id":
 *                                      type: objectid
 *                                  "questoes":
 *                                      type: array
 *                                  "nome":
 *                                      type: objectid
 *                                  "descricao":
 *                                      type: objectid
 *                                  "duracao":
 *                                      type: objectid
 *                                  "createdAt":
 *                                      type: objectid
 *                                  "updatedAt":
 *                                      type: objectid
 *                      count:
 *                          type: number
 *          '500':
 *              description: Falha
 *
 *
 */
const buscaSimuladoPorId = async (req, res) => {
  const { idSimulado: simuladoID } = req.params;

  let simulado = await Simulado.findOne({ _id: simuladoID }).populate(
    "questoes"
  );

  simulado = {
    nome: simulado.nome,
    idSimulado: simulado._id,
    professor: simulado.professor,
    descricao: simulado.descricao,
    duracao: simulado.duracao,
    data_fim: simulado.datafim,
    data_criacao: simulado.createdAt,
    qtd_questoes: simulado.questoes.length,
    questoes: simulado.questoes,
  };

  if (!simulado) {
    throw new BadRequestError(`Nenhum simulado com o id ${simuladoID}`);
    //return res.status(404).json({success: false, data: [], msg:`Nenhuma simulado com o id ${simuladoID}`})
  }
  res.status(StatusCodes.OK).json({ success: true, data: [{ simulado }] });
};

/**
 * @swagger
 * /api/v1/simulados/{idSimulado}/questoes:
 *  get:
 *      tags:
 *      - "Simulados"
 *      summary: Busque simulado por Id
 *      description: Use para requisitar um simulado pelo id
 *      security: []
 *      parameters:
 *          - name: idsimulado
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
 *                                  "simulado":
 *                                      type: string
 *                                  "_id":
 *                                      type: objectid
 *                                  "questoes":
 *                                      type: array
 *                                  "nome":
 *                                      type: objectid
 *                                  "descricao":
 *                                      type: objectid
 *                                  "duracao":
 *                                      type: objectid
 *                                  "createdAt":
 *                                      type: objectid
 *                                  "updatedAt":
 *                                      type: objectid
 *                      count:
 *                          type: number
 *          '500':
 *              description: Falha
 *
 *
 */
const buscaQuestoesSimuladoPorId = async (req, res) => {
  const { idSimulado: simuladoID } = req.params;
  const simulado = await Simulado.findOne({ _id: simuladoID });
  if (!simulado) {
    throw new BadRequestError(`Nenhum simulado com o id ${simuladoID}`);
    //return res.status(404).json({success: false, data: [], msg:`Nenhuma simulado com o id ${simuladoID}`})
  }
  let questoes = [];
  for (let questao of simulado.questoes) {
    questoes.push(questao);
  }

  /*
        db.feed.find({
            "_id" : {
              "$in" : 
                [ObjectId("55880c251df42d0466919268"), 
                 ObjectId("55bf528e69b70ae79be35006")
                ]
             }
          });
          */
  const questoesdoSimulado = await Questao.find({ _id: { $in: questoes } });

  res.status(StatusCodes.OK).json({
    success: true,
    data: [{ questoesdoSimulado }],
    questoes: questoesdoSimulado.length,
  });
};

/**
 * @swagger
 * /api/v1/simulados/:
 *  post:
 *      tags:
 *      - "Simulados"
 *      summary: Crie um novo simulado
 *      description: Use para criar um novo simulado
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
 *                          professor:
 *                              type: objectid
 *                          "questoes":
 *                              type: array
 *                          descricao:
 *                              type: string
 *                          duracao:
 *                              type: Number
 *                  example:
 *                      questoes: ["62705407bd500af9b1f682ab", "62725e53484c851001fe2703", "62725e58484c851001fe2705", "62725e5c484c851001fe2707"]
 *                      professor: 62704669834e306b0ed9d810
 *                      nome: Simulado Teste
 *                      descricao: Simulado atualizado via Swagger
 *                      duracao: 60
 *                      datafim: 2022-06-20T00:00:00.000+00:00
 *          required: true
 *      responses:
 *          '201':
 *              description: simulado adicionado
 *          '500':
 *              description: Falha
 *
 *
 */

const criaSimulado = async (req, res) => {
  const {
    user: { userId, profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { questoes, nome, descricao, duracao } = req.body;
  if (!questoes || !nome || !descricao || !duracao) {
    throw new BadRequestError("Favor enviar todas as informações necessárias");
  }
  const simulado = await Simulado.create({ ...req.body, professor: userId });
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, data: [{ nome: simulado.nome, idSimulado: simulado._id }] });
};

/**
 * @swagger
 * /api/v1/simulados/{idSimulado}:
 *  patch:
 *      tags:
 *      - "Simulados"
 *      summary: Atualize um simulado pelo Id
 *      description: Use para atualizar o nome de um simulado
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      parameters:
 *      - name: idsimulado
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
 *                          professor:
 *                              type: objectid
 *                          "questoes":
 *                              type: array
 *                          descricao:
 *                              type: string
 *                          duracao:
 *                              type: Number
 *                          datafim:
 *                              type: Date
 *                  example:
 *                      questoes: ["62705407bd500af9b1f682ab", "62725e53484c851001fe2703", "62725e58484c851001fe2705", "62725e5c484c851001fe2707"]
 *                      professor: 62704669834e306b0ed9d810
 *                      nome: Simulado Teste
 *                      descricao: Simulado atualizado via Swagger
 *                      duracao: 60
 *          required: true
 *      responses:
 *          '200':
 *              description: simulado atualizada
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
 *                                  "simulado":
 *                                      type: string
 *                                  "_id":
 *                                      type: objectid
 *                                  "questoes":
 *                                      type: array
 *                                  "nome":
 *                                      type: objectid
 *                                  "descricao":
 *                                      type: objectid
 *                                  "duracao":
 *                                      type: objectid
 *                                  "createdAt":
 *                                      type: objectid
 *                                  "updatedAt":
 *                                      type: objectid
 *                      msg:
 *                          type: string
 *          '500':
 *              description: Falha
 *
 *
 */

const atualizaSimulado = async (req, res) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { idSimulado: simuladoID } = req.params;

  const { questoes, nome, descricao, duracao } = req.body;
  if (!questoes || !nome || !descricao || !duracao) {
    throw new BadRequestError("Favor enviar todas as informações necessárias");
  }
  const simulado = await Simulado.findByIdAndUpdate(
    { _id: simuladoID },
    { ...req.body },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!simulado) {
    throw new NotFoundError(`Id ${simuladoID} não encontrado`);
  }

  res
    .status(StatusCodes.OK)
    .json({ success: true, data: simulado, msg: "Simulado atualizado" });
};

/**
 * @swagger
 * /api/v1/simulados/{idSimulado}:
 *  delete:
 *      tags:
 *      - "Simulados"
 *      summary: Apague um simulado
 *      description: Use para deletar um simulado com o seu id
 *      parameters:
 *          - name: idsimulado
 *            in: path
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          '200':
 *              description: Sucesso
 *          '500':
 *              description: Falha
 *
 *
 */
const apagaSimulado = async (req, res) => {
  const {
    user: { profile },
  } = req;
  if (profile != "professor") {
    throw new UnauthenticatedError("Não possui credenciais de acesso");
  }

  const { idSimulado: simuladoID } = req.params;
  const simulado = await Simulado.findOneAndDelete({ _id: simuladoID });
  if (!simulado) {
    throw new NotFoundError(`Id ${simuladoID} não encontrado`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: simulado,
    msg: "Simulado deletado com sucesso!",
  });
};

module.exports = {
  buscaSimulado,
  buscaSimuladoPorId,
  criaSimulado,
  atualizaSimulado,
  apagaSimulado,
  buscaQuestoesSimuladoPorId,
};
