const express = require('express');
const routes = express.Router();
const controller = require('../controller/activityController');

routes.route('/activities').get(controller.getAll);
routes.route('/activities/:id').get(controller.getById);
routes.route('/activities').post(controller.insert);
routes.route('/activities').put(controller.update);
routes.route('/activities/:id').delete(controller.delete);
routes.route('/activities/filter/:filter').get(controller.filtrate);

module.exports = routes;