const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

//const jwt = require('jsonwebtoken')
//const bcript = require('bcryptjs')

/**
 * @swagger
 * /api/v1/auth/register/:
 *  post:
 *      tags:
 *      - "Autenticação"
 *      summary: Crie um novo usuário
 *      description: Use para criar um novo usuário
 *      security: []
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
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                  example:
 *                      name: Aluno
 *                      email: aluno@simulados.com.br
 *                      password: '12345678'
 *          required: true
 *      responses:
 *          '201':
 *              description: disciplina adicionada
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      user:
 *                          type: object
 *                          properties:
 *                              'name':
 *                                  type: string
 *                      token:
 *                          type: string
 *          '500':
 *              description: Falha
 *
 *
 */

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = await user.createHash();
  res.status(StatusCodes.CREATED).json({ success: true, token });
};

/**
 * @swagger
 * /api/v1/auth/google/:
 *  post:
 *      tags:
 *      - "Autenticação"
 *      summary: Login com o Goggle
 *      description: Use para entrar com um usuário do Google
 *      security: []
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
 *                          googleId:
 *                              type: string
 *                          name:
 *                             type: string
 *                          email:
 *                              type: string
 *                  example:
 *                      googleId: '104369968167442393250'
 *                      name: 'Aluno'
 *                      email: 'andradevbruna@gmail.com'
 *          required: true
 *      responses:
 *          '201':
 *              description: Usuário logado no Google
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      token:
 *                          type: string
 *          '500':
 *              description: Falha
 *
 *
 */

const google = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    const newUser = await User.create({ ...req.body });
    const token = await newUser.createHash();
    res.status(StatusCodes.CREATED).json({ success: true, token });
  }

  if (user) {
    const token = await user.createHash();
    res.status(StatusCodes.CREATED).json({ success: true, token });
  }
};

/**
 * @swagger
 * /api/v1/auth/login/:
 *  post:
 *      tags:
 *      - "Autenticação"
 *      summary: Logar no portal
 *      description: Logar o usuário no portal Simulados
 *      security: []
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
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                  example:
 *                      email: aluno@simulados.com.br
 *                      password: '12345678'
 *          required: true
 *      responses:
 *          '200':
 *              description: Usuário logado
 *              schema:
 *                  type: object
 *                  properties:
 *                      success:
 *                          type: boolean
 *                      user:
 *                          type: object
 *                          properties:
 *                              'name':
 *                                  type: string
 *                      token:
 *                          type: string
 *          '500':
 *              description: Falha
 *
 *
 */

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const validated = await user.comparePasswords(password);

  if (!validated) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = await user.createHash();
  res
    .status(StatusCodes.OK)
    .json({ success: true, user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
  google
};
