const express = require('express');
const routes = require('./routes');
const { specs, swaggerUi } = require('../swagger');

const app = express();
routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;
