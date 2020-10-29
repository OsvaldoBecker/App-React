const express = require('express');
const routes = express.Router();
const controller = require('../controller/projectController');

routes.route('/projects').get(controller.getAll);
routes.route('/projects/:id').get(controller.getById);
routes.route('/projects').post(controller.insert);
routes.route('/projects').put(controller.update);
routes.route('/projects/:id').delete(controller.delete);
routes.route('/projects/filter/:filter').get(controller.filtrate);

module.exports = routes;