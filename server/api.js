const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./minions');

apiRouter.use('/api/minions', minionsRouter);

module.exports = apiRouter;
