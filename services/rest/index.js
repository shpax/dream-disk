const awilix = require('awilix');
const path = require('path');
const express = require('express');
const config = require('config');

const container = awilix.createContainer();
const app = express();

container.registerValue('config', config.rest);

container.loadModules([
  // local modules
  path.join(__dirname, 'helpers/*/index.js'),
  path.join(__dirname, 'controllers/*/index.js'),
  path.join(__dirname, 'models/*/index.js')
], config.awilix);


app.listen(config.rest.port, () => {
  console.log(`app listening on ${config.rest.port}`);
});