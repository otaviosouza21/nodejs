const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Cadastro Cursos',
      version: '1.1.0',
    },
  },
  apis: ['./src/routes/*.js'], // Substitua pelo caminho real dos seus arquivos de rotas
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
