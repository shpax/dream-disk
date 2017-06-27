const awilix = require('awilix');
const path = require('path');
const express = require('express');
const config = require('config');

const container = awilix.createContainer();
const app = express();

container.registerValue('config', config);
container.loadModules(config.awilix.modules(__dirname), config.awilix.options);

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

/** @type {ReactController} */
const reactController = container.resolve('reactController');

app.get('/', reactController.indexPage);
app.get('/user', reactController.userPage);
app.get('/disks', reactController.diskListPage);
app.get('/disk/:diskId', reactController.diskPage);

app.listen(config.web.port);