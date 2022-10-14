/**
 * @swagger
 * openapi: 3.1.0
info:
  title: PI Simulados
  description: API construida para o Projeto Integrador da Univesp, Simulados.
  contact:
    name: Thiago Debia
    email: thiagodebia@gmail.com
  version: '1.0'
jsonSchemaDialect: https://json-schema.org/draft/2020-12/schema
servers:
- url: https://pi-simulados.herokuapp.com/api/v1
  variables: {}
paths:
  /auth/login:
    post:
      tags:
      - Auth
      summary: Login
      operationId: Login
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginRequest'
            example:
              email: thiagodebia@gmail.com
              password: '1234567'
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security: []
    parameters: []
  /auth/register:
    post:
      tags:
      - Auth
      summary: Register
      operationId: Register
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/RegisterRequest'
            example:
              name: Thiago
              email: thiagodebia@gmail.com
              password: '12345678'
        required: true
      responses:
        '200':
          description: ''
          headers: {}
      deprecated: false
      security: []
    parameters: []
  /disciplinas:
    post:
      tags:
      - disciplinas
      summary: Cria disciplina
      operationId: Criadisciplina
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CriadisciplinaRequest'
            example:
              nome: ''
        required: true
      responses:
        '201':
          description: Created
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '101'
                    contentMediaType: text/plain
                  example: '101'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"65-LObPxOzRXln5/aEBCEcYKE4LT34"
                    contentMediaType: text/plain
                  example: W/"65-LObPxOzRXln5/aEBCEcYKE4LT34"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 01:49:08 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 01:49:08 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Criadisciplina'
              example:
                success: true
                data:
                - disciplina:
                    nome: Matemática
                    _id: 6269f294ad1b83214f330111
                    __v: 0
        '500':
          description: Internal Server Error
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '771'
                    contentMediaType: text/plain
                  example: '771'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"303-OGV3Ui9/LoTaQ1M14njdpkty5wE"
                    contentMediaType: text/plain
                  example: W/"303-OGV3Ui9/LoTaQ1M14njdpkty5wE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 02:24:16 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 02:24:16 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Criadisciplina2'
              example:
                success: false
                data: []
                msg:
                  errors:
                    nome:
                      name: ValidatorError
                      message: O nome da matéria não deve ser maior que 50 palavras
                      properties:
                        message: O nome da matéria não deve ser maior que 50 palavras
                        type: maxlength
                        maxlength: 50
                        path: nome
                        value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
                      kind: maxlength
                      path: nome
                      value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
                  _message: disciplina validation failed
                  name: ValidationError
                  message: 'disciplina validation failed: nome: O nome da matéria não deve ser maior que 50 palavras'
      deprecated: false
      security:
      - bearer: []
    get:
      tags:
      - disciplinas
      summary: Busca todas as disciplinas
      operationId: Buscatodasasdisciplinas
      parameters: []
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '239'
                    contentMediaType: text/plain
                  example: '239'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"ef-33U9hK0pTmAlnBEQfTz2/0twZI8"
                    contentMediaType: text/plain
                  example: W/"ef-33U9hK0pTmAlnBEQfTz2/0twZI8"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 09:32:18 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 09:32:18 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplina2'
              example:
                success: true
                data:
                - _id: 6269f3c608766a6139f2599e
                  nome: Matemática
                  __v: 0
                - _id: 6269f6c3e7f9c191747d61c5
                  nome: Conhecimentos Gerais
                  __v: 0
                - _id: 6269faf3b1e8afa6eec07c3f
                  nome: Pensamento Computacional
                  __v: 0
      deprecated: false
      security: []
    parameters: []
  /disciplinas/6269fas3b1e8afa6eec04c3f:
    get:
      tags:
      - disciplinas
      summary: Busca disciplina por id
      operationId: Buscadisciplinaporid
      parameters:
      - name: Content-Type
        in: header
        description: ''
        required: true
        style: simple
        schema:
          const: application/json
          type: string
          examples:
          - application/json
      responses:
        '201':
          description: Created
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '101'
                    contentMediaType: text/plain
                  example: '101'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"65-a0GN2tkUzWVWR7hITjgyGGed1UM"
                    contentMediaType: text/plain
                  example: W/"65-a0GN2tkUzWVWR7hITjgyGGed1UM"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:15:22 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:15:22 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplina3'
              example:
                success: true
                data:
                - disciplina:
                    _id: 6269f3c608766a6139f2599e
                    nome: Matemática
                    __v: 0
        '404':
          description: Not Found
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '85'
                    contentMediaType: text/plain
                  example: '85'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"55-AoiHtGwZSal14QC0W36/LdjQIBM"
                    contentMediaType: text/plain
                  example: W/"55-AoiHtGwZSal14QC0W36/LdjQIBM"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:24:30 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:24:30 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid1'
              example:
                success: false
                data: []
                msg: Nenhuma disciplina com o id 6269f3c608766a6139f25990
      deprecated: false
      security: []
    parameters: []
  /disciplinas/6269faf3b1e8afa6eec07c3f:
    delete:
      tags:
      - disciplinas
      summary: Apaga disciplina
      operationId: Apagadisciplina
      parameters:
      - name: Content-Type
        in: header
        description: ''
        required: true
        style: simple
        schema:
          const: application/json
          type: string
          examples:
          - application/json
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '96'
                    contentMediaType: text/plain
                  example: '96'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"60-aHhL5N1kV+t0z252tq0Ba45KIRE"
                    contentMediaType: text/plain
                  example: W/"60-aHhL5N1kV+t0z252tq0Ba45KIRE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:32:45 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:32:45 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid2'
              example:
                success: true
                data:
                  _id: 6269f3c608766a6139f2599e
                  nome: Matemática
                  __v: 0
                msg: ''
        '404':
          description: Not Found
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '75'
                    contentMediaType: text/plain
                  example: '75'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"4b-t1ArC8dLs/kyJkBdU8wf+xVdTU0"
                    contentMediaType: text/plain
                  example: W/"4b-t1ArC8dLs/kyJkBdU8wf+xVdTU0"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:33:39 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:33:39 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid1'
              example:
                success: false
                data: []
                msg: Id 6269f3c608796a6139f2599e não existe
      deprecated: false
      security:
      - bearer: []
    parameters: []
  /disciplinas/626b2fe65c8a7ebfc112668e:
    patch:
      tags:
      - disciplinas
      summary: Atualiza disciplina
      operationId: Atualizadisciplina
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AtualizadisciplinaRequest'
            example:
              nome: ''
        required: true
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '110'
                    contentMediaType: text/plain
                  example: '110'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"6e-JuZHPpWyjcOPA89+g/6qVq1sFtE"
                    contentMediaType: text/plain
                  example: W/"6e-JuZHPpWyjcOPA89+g/6qVq1sFtE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:56:35 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:56:35 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Atualizadisciplina'
              example:
                success: true
                data:
                  _id: 6269f6c3e7f9c191747d61c5
                  nome: Futebol
                  __v: 0
                msg: disciplina atualizada
      deprecated: false
      security:
      - bearer: []
    parameters: []
  /questoes:
    post:
      tags:
      - Questoes
      summary: Cria Questão
      operationId: CriaQuestão
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CriaQuestoRequest'
            example:
              enunciado: É possível que você encontre muitos problemas para resolver com sua aplicação. Qual ferramenta do pensamento computacional é utilzada para essa situação?
              disciplina: 6269f6c3e7f9c191747d61c5
              alternativas:
              - Decomposição de Problemas
              - Resolução de todos os problemas
              - Utilização de Framework Web
              - Todas as anteriores
              comentarios:
              - Correto, com a decomposição dos problemas, é possível resolver os problemas menores, até chegar na solução do todos
              - BBB
              - CCCC
              - DDDD
              correta: 1
        required: true
      responses:
        '201':
          description: Created
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '101'
                    contentMediaType: text/plain
                  example: '101'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"65-LObPxOzRXln5/aEBCEcYKE4LT34"
                    contentMediaType: text/plain
                  example: W/"65-LObPxOzRXln5/aEBCEcYKE4LT34"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 01:49:08 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 01:49:08 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Criadisciplina4'
              example:
                success: true
                data:
                - disciplina:
                    nome: Matemática
                    _id: 6269f294ad1b83214f330111
                    __v: 0
        '500':
          description: Internal Server Error
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '771'
                    contentMediaType: text/plain
                  example: '771'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"303-OGV3Ui9/LoTaQ1M14njdpkty5wE"
                    contentMediaType: text/plain
                  example: W/"303-OGV3Ui9/LoTaQ1M14njdpkty5wE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 02:24:16 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 02:24:16 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Criadisciplina2'
              example:
                success: false
                data: []
                msg:
                  errors:
                    nome:
                      name: ValidatorError
                      message: O nome da matéria não deve ser maior que 50 palavras
                      properties:
                        message: O nome da matéria não deve ser maior que 50 palavras
                        type: maxlength
                        maxlength: 50
                        path: nome
                        value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
                      kind: maxlength
                      path: nome
                      value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
                  _message: disciplina validation failed
                  name: ValidationError
                  message: 'disciplina validation failed: nome: O nome da matéria não deve ser maior que 50 palavras'
      deprecated: false
      security:
      - bearer: []
    get:
      tags:
      - Questoes
      summary: Busca todas as Questoes
      operationId: BuscatodasasQuestoes
      parameters: []
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '239'
                    contentMediaType: text/plain
                  example: '239'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"ef-33U9hK0pTmAlnBEQfTz2/0twZI8"
                    contentMediaType: text/plain
                  example: W/"ef-33U9hK0pTmAlnBEQfTz2/0twZI8"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 09:32:18 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 09:32:18 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplina7'
              example:
                success: true
                data:
                - _id: 6269f3c608766a6139f2599e
                  nome: Matemática
                  __v: 0
                - _id: 6269f6c3e7f9c191747d61c5
                  nome: Conhecimentos Gerais
                  __v: 0
                - _id: 6269faf3b1e8afa6eec07c3f
                  nome: Pensamento Computacional
                  __v: 0
      deprecated: false
      security: []
    parameters: []
  /questoes/6270532f2a421e80995ba30e:
    get:
      tags:
      - Questoes
      summary: Busca questao por id
      operationId: Buscaquestaoporid
      parameters:
      - name: Content-Type
        in: header
        description: ''
        required: true
        style: simple
        schema:
          const: application/json
          type: string
          examples:
          - application/json
      responses:
        '201':
          description: Created
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '101'
                    contentMediaType: text/plain
                  example: '101'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"65-a0GN2tkUzWVWR7hITjgyGGed1UM"
                    contentMediaType: text/plain
                  example: W/"65-a0GN2tkUzWVWR7hITjgyGGed1UM"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:15:22 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:15:22 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplina8'
              example:
                success: true
                data:
                - disciplina:
                    _id: 6269f3c608766a6139f2599e
                    nome: Matemática
                    __v: 0
        '404':
          description: Not Found
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '85'
                    contentMediaType: text/plain
                  example: '85'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"55-AoiHtGwZSal14QC0W36/LdjQIBM"
                    contentMediaType: text/plain
                  example: W/"55-AoiHtGwZSal14QC0W36/LdjQIBM"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:24:30 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:24:30 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid1'
              example:
                success: false
                data: []
                msg: Nenhuma disciplina com o id 6269f3c608766a6139f25990
      deprecated: false
      security: []
    delete:
      tags:
      - Questoes
      summary: Apaga Questao
      operationId: ApagaQuestao
      parameters:
      - name: Content-Type
        in: header
        description: ''
        required: true
        style: simple
        schema:
          const: application/json
          type: string
          examples:
          - application/json
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '96'
                    contentMediaType: text/plain
                  example: '96'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"60-aHhL5N1kV+t0z252tq0Ba45KIRE"
                    contentMediaType: text/plain
                  example: W/"60-aHhL5N1kV+t0z252tq0Ba45KIRE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:32:45 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:32:45 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid2'
              example:
                success: true
                data:
                  _id: 6269f3c608766a6139f2599e
                  nome: Matemática
                  __v: 0
                msg: ''
        '404':
          description: Not Found
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '75'
                    contentMediaType: text/plain
                  example: '75'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"4b-t1ArC8dLs/kyJkBdU8wf+xVdTU0"
                    contentMediaType: text/plain
                  example: W/"4b-t1ArC8dLs/kyJkBdU8wf+xVdTU0"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:33:39 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:33:39 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/disciplinaporid1'
              example:
                success: false
                data: []
                msg: Id 6269f3c608796a6139f2599e não existe
      deprecated: false
      security:
      - bearer: []
    parameters: []
  /questoes/62705407bd500af9b1f682ab:
    patch:
      tags:
      - Questoes
      summary: Atualiza Questao
      operationId: AtualizaQuestao
      parameters: []
      requestBody:
        description: ''
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AtualizaQuestaoRequest'
            example:
              nome: ''
        required: true
      responses:
        '200':
          description: OK
          headers:
            X-Powered-By:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Express
                    contentMediaType: text/plain
                  example: Express
            Content-Length:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - '110'
                    contentMediaType: text/plain
                  example: '110'
            ETag:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - W/"6e-JuZHPpWyjcOPA89+g/6qVq1sFtE"
                    contentMediaType: text/plain
                  example: W/"6e-JuZHPpWyjcOPA89+g/6qVq1sFtE"
            Date:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - Thu, 28 Apr 2022 10:56:35 GMT
                    contentMediaType: text/plain
                  example: Thu, 28 Apr 2022 10:56:35 GMT
            Connection:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - keep-alive
                    contentMediaType: text/plain
                  example: keep-alive
            Keep-Alive:
              content:
                text/plain:
                  schema:
                    type: string
                    examples:
                    - timeout=5
                    contentMediaType: text/plain
                  example: timeout=5
          content:
            application/json; charset=utf-8:
              schema:
                $ref: '#/components/schemas/Atualizadisciplina'
              example:
                success: true
                data:
                  _id: 6269f6c3e7f9c191747d61c5
                  nome: Futebol
                  __v: 0
                msg: disciplina atualizada
      deprecated: false
      security:
      - bearer: []
    parameters: []
components:
  schemas:
    LoginRequest:
      title: LoginRequest
      required:
      - email
      - password
      type: object
      properties:
        email:
          type: string
        password:
          type: string
      examples:
      - email: thiagodebia@gmail.com
        password: '1234567'
    RegisterRequest:
      title: RegisterRequest
      required:
      - name
      - email
      - password
      type: object
      properties:
        name:
          type: string
        email:
          type: string
        password:
          type: string
      examples:
      - name: Thiago
        email: thiagodebia@gmail.com
        password: '12345678'
    CriadisciplinaRequest:
      title: CriadisciplinaRequest
      required:
      - nome
      type: object
      properties:
        nome:
          type: string
      examples:
      - nome: ''
    Criadisciplina:
      title: Criadisciplina
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Datum'
          description: ''
      examples:
      - success: true
        data:
        - disciplina:
            nome: Matemática
            _id: 6269f294ad1b83214f330111
            __v: 0
    Datum:
      title: Datum
      required:
      - disciplina
      type: object
      properties:
        disciplina:
          $ref: '#/components/schemas/disciplina'
      examples:
      - disciplina:
          nome: Matemática
          _id: 6269f294ad1b83214f330111
          __v: 0
    disciplina:
      title: disciplina
      required:
      - nome
      - _id
      - __v
      type: object
      properties:
        nome:
          type: string
        _id:
          type: string
        __v:
          type: integer
          contentEncoding: int32
      examples:
      - nome: Matemática
        _id: 6269f294ad1b83214f330111
        __v: 0
    Msg:
      title: Msg
      required:
      - errors
      - _message
      - name
      - message
      type: object
      properties:
        errors:
          $ref: '#/components/schemas/Errors'
        _message:
          type: string
        name:
          type: string
        message:
          type: string
      examples:
      - errors:
          nome:
            name: ValidatorError
            message: O nome da matéria não deve ser maior que 50 palavras
            properties:
              message: O nome da matéria não deve ser maior que 50 palavras
              type: maxlength
              maxlength: 50
              path: nome
              value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
            kind: maxlength
            path: nome
            value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
        _message: disciplina validation failed
        name: ValidationError
        message: 'disciplina validation failed: nome: O nome da matéria não deve ser maior que 50 palavras'
    Errors:
      title: Errors
      required:
      - nome
      type: object
      properties:
        nome:
          $ref: '#/components/schemas/Nome'
      examples:
      - nome:
          name: ValidatorError
          message: O nome da matéria não deve ser maior que 50 palavras
          properties:
            message: O nome da matéria não deve ser maior que 50 palavras
            type: maxlength
            maxlength: 50
            path: nome
            value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
          kind: maxlength
          path: nome
          value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
    Nome:
      title: Nome
      required:
      - name
      - message
      - properties
      - kind
      - path
      - value
      type: object
      properties:
        name:
          type: string
        message:
          type: string
        properties:
          $ref: '#/components/schemas/Properties'
        kind:
          type: string
        path:
          type: string
        value:
          type: string
      examples:
      - name: ValidatorError
        message: O nome da matéria não deve ser maior que 50 palavras
        properties:
          message: O nome da matéria não deve ser maior que 50 palavras
          type: maxlength
          maxlength: 50
          path: nome
          value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
        kind: maxlength
        path: nome
        value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
    Properties:
      title: Properties
      required:
      - message
      - type
      - maxlength
      - path
      - value
      type: object
      properties:
        message:
          type: string
        type:
          type: string
        maxlength:
          type: integer
          contentEncoding: int32
        path:
          type: string
        value:
          type: string
      examples:
      - message: O nome da matéria não deve ser maior que 50 palavras
        type: maxlength
        maxlength: 50
        path: nome
        value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
    Criadisciplina2:
      title: Criadisciplina2
      required:
      - success
      - data
      - msg
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            type: string
          description: ''
        msg:
          $ref: '#/components/schemas/Msg'
      examples:
      - success: false
        data: []
        msg:
          errors:
            nome:
              name: ValidatorError
              message: O nome da matéria não deve ser maior que 50 palavras
              properties:
                message: O nome da matéria não deve ser maior que 50 palavras
                type: maxlength
                maxlength: 50
                path: nome
                value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
              kind: maxlength
              path: nome
              value: hhghghhhjhbjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjh
          _message: disciplina validation failed
          name: ValidationError
          message: 'disciplina validation failed: nome: O nome da matéria não deve ser maior que 50 palavras'
    disciplina2:
      title: disciplina2
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Datum2'
          description: ''
      examples:
      - success: true
        data:
        - _id: 6269f3c608766a6139f2599e
          nome: Matemática
          __v: 0
        - _id: 6269f6c3e7f9c191747d61c5
          nome: Conhecimentos Gerais
          __v: 0
        - _id: 6269faf3b1e8afa6eec07c3f
          nome: Pensamento Computacional
          __v: 0
    Datum2:
      title: Datum2
      required:
      - _id
      - nome
      - __v
      type: object
      properties:
        _id:
          type: string
        nome:
          type: string
        __v:
          type: integer
          contentEncoding: int32
      examples:
      - _id: 6269f3c608766a6139f2599e
        nome: Matemática
        __v: 0
    disciplina3:
      title: disciplina3
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Datum'
          description: ''
      examples:
      - success: true
        data:
        - disciplina:
            _id: 6269f3c608766a6139f2599e
            nome: Matemática
            __v: 0
    disciplinaporid1:
      title: disciplinaporid1
      required:
      - success
      - data
      - msg
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            type: string
          description: ''
        msg:
          type: string
      examples:
      - success: false
        data: []
        msg: Nenhuma disciplina com o id 6269f3c608766a6139f25990
    disciplinaporid2:
      title: disciplinaporid2
      required:
      - success
      - data
      - msg
      type: object
      properties:
        success:
          type: boolean
        data:
          $ref: '#/components/schemas/Data'
        msg:
          type: string
      examples:
      - success: true
        data:
          _id: 6269f3c608766a6139f2599e
          nome: Matemática
          __v: 0
        msg: ''
    Data:
      title: Data
      required:
      - _id
      - nome
      - __v
      type: object
      properties:
        _id:
          type: string
        nome:
          type: string
        __v:
          type: integer
          contentEncoding: int32
      examples:
      - _id: 6269f3c608766a6139f2599e
        nome: Matemática
        __v: 0
    AtualizadisciplinaRequest:
      title: AtualizadisciplinaRequest
      required:
      - nome
      type: object
      properties:
        nome:
          type: string
      examples:
      - nome: ''
    Atualizadisciplina:
      title: Atualizadisciplina
      required:
      - success
      - data
      - msg
      type: object
      properties:
        success:
          type: boolean
        data:
          $ref: '#/components/schemas/Data'
        msg:
          type: string
      examples:
      - success: true
        data:
          _id: 6269f6c3e7f9c191747d61c5
          nome: Futebol
          __v: 0
        msg: disciplina atualizada
    CriaQuestoRequest:
      title: CriaQuestoRequest
      required:
      - enunciado
      - disciplina
      - alternativas
      - comentarios
      - correta
      type: object
      properties:
        enunciado:
          type: string
        disciplina:
          type: string
        alternativas:
          type: array
          items:
            type: string
          description: ''
        comentarios:
          type: array
          items:
            type: string
          description: ''
        correta:
          type: integer
          contentEncoding: int32
      examples:
      - enunciado: É possível que você encontre muitos problemas para resolver com sua aplicação. Qual ferramenta do pensamento computacional é utilzada para essa situação?
        disciplina: 6269f6c3e7f9c191747d61c5
        alternativas:
        - Decomposição de Problemas
        - Resolução de todos os problemas
        - Utilização de Framework Web
        - Todas as anteriores
        comentarios:
        - Correto, com a decomposição dos problemas, é possível resolver os problemas menores, até chegar na solução do todos
        - BBB
        - CCCC
        - DDDD
        correta: 1
    Criadisciplina4:
      title: Criadisciplina4
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Data2'
          description: ''
      examples:
      - success: true
        data:
        - disciplina:
            nome: Matemática
            _id: 6269f294ad1b83214f330111
            __v: 0
    Data2:
      title: Data2
      required:
      - disciplina
      type: object
      properties:
        disciplina:
          $ref: '#/components/schemas/disciplina'
      examples:
      - disciplina:
          nome: Matemática
          _id: 6269f294ad1b83214f330111
          __v: 0
    disciplina7:
      title: disciplina7
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Data'
          description: ''
      examples:
      - success: true
        data:
        - _id: 6269f3c608766a6139f2599e
          nome: Matemática
          __v: 0
        - _id: 6269f6c3e7f9c191747d61c5
          nome: Conhecimentos Gerais
          __v: 0
        - _id: 6269faf3b1e8afa6eec07c3f
          nome: Pensamento Computacional
          __v: 0
    disciplina8:
      title: disciplina8
      required:
      - success
      - data
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/Data2'
          description: ''
      examples:
      - success: true
        data:
        - disciplina:
            _id: 6269f3c608766a6139f2599e
            nome: Matemática
            __v: 0
    AtualizaQuestaoRequest:
      title: AtualizaQuestaoRequest
      required:
      - nome
      type: object
      properties:
        nome:
          type: string
      examples:
      - nome: ''
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
security: []
tags:
- name: Auth
- name: disciplinas
- name: Questoes
- name: Misc
  description: ''
 */
