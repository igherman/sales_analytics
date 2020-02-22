const express = require('express');
const Router = express.Router();
const importController = require('../controllers/import');

Router.get('/', importController.getImport);
Router.post('/import', importController.postImport);

module.exports = Router;