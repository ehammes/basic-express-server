'use strict';

// **REQUIRE
const express = require('express');
const app = express();
const notFoundHandler = require('../src/error-handlers/404');
const internalError = require('../src/error-handlers/500');
const logger = require('../src/middleware/logger');
const validator = require('../src/middleware/validator');
require('dotenv').config();

const PORT = process.env.PORT || 3002;


// **ROUTES

app.get('/person', logger, validator, (req, res, next) => {
  let { name } = req.query;
  let object = {name};
  res.status(200).json(object);
});

//**USE
app.use(logger);
app.use('*', logger, notFoundHandler);
app.use(internalError);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`listening on port ${PORT}`)),
};
