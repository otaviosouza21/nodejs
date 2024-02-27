const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoutes.js');
const cursos = require('./cursosRoutes.js');

module.exports = (app) => {
  const cors = require('cors');

  app.use(cors());
  app.use(express.json(), pessoas, categorias, cursos);
};
