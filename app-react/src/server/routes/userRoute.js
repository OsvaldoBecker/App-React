const express = require('express');
const routes = express.Router();
const controller = require('../controller/userController');

routes.route('/').get(controller.list);
routes.route('/').post(controller.include);

module.exports = routes;