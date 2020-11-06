const express = require('express');
const routes = express.Router();
const controle = require('../controller/UserController');

routes.route('/users').get(controle.getAll);
routes.route('/users/:id').get(controle.get);
routes.route('/users').post(controle.insert);
routes.route('/users').put(controle.update);
routes.route('/users/:id').delete(controle.delete);
routes.route('/users/filter/:filter').get(controle.filtrate);
module.exports = routes;