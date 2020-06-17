const express = require('express');
const routes = express.Router();

const SensorController = require('./controllers/SensorController');


routes.get('/sensores', SensorController.index);
routes.get('/sensores/last', SensorController.listLast);
routes.post('/sensores', SensorController.create);
module.exports = routes; 