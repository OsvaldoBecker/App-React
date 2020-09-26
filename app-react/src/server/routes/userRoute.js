const express = require('express');
const routes = express.Router();
const controller = require('../controller/userController');

routes.route('/').get(controller.list);
routes.route('/').post(controller.insert);

module.exports = routes;