require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

//connectDB
const connectDB = require("./db/connect");

//error handler
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handlers");

//swagger
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    //swagger: "2.0",
    openapi: "3.0.0",
    info: {
      title: "API do Portal Simulados",
      description: `API construida para o Projeto Integrador da Univesp, Simulados.`,
      contact: {
        name: "API Support",
        url: "https://pi-simulados.herokuapp.com/",
        email: "2012860@aluno.univesp.br",
      },
      servers: {
        url: [
          "https://pi-simulados.herokuapp.com/api/v1",
          "http://localhost:5007/",
        ],
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    "./controllers/auth.js",
    "./controllers/feedback.js",
    "./controllers/disciplinas.js",
    "./controllers/questoesRespondidas.js",
    "./controllers/questoes.js",
    "./controllers/simulados.js",
    "./controllers/simuladosRespondidos.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//auth
const authenticateUser = require("./middleware/authentication");

//rotas
const authRouter = require("./routes/auth");
const Disciplinas = require("./routes/disciplinas");
const Questoes = require("./routes/questoes");
const Simulados = require("./routes/simulados");
const Feedbacks = require("./routes/feedbacks");
const SimuladosRespondidos = require("./routes/simuladosRespondidos");

//
//Security
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15 minutes
    max: 100, // limit each ip to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

//app.use(express.urlencoded({extended:false}))

//lista de apis
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/disciplinas", Disciplinas);
app.use("/api/v1/questoes", Questoes);
app.use("/api/v1/simulados", Simulados);
app.use("/api/v1/feedbacks", authenticateUser, Feedbacks);
app.use("/api/v1/simuladoRespondido", authenticateUser, SimuladosRespondidos);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5007;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
