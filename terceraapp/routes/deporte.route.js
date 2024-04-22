const  { Router } = require('express');

const { viewDeporte, deportePost, deportePut, deporteDelete } = require('../controllers/deporte.controller');

const routerDeporte = Router();

routerDeporte.get('', viewDeporte);
routerDeporte.post('', deportePost);
routerDeporte.put('/:id', deportePut);
routerDeporte.delete('/:id', deporteDelete);

module.exports = routerDeporte;