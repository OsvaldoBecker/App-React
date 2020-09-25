const { Router } = require("express");
const routes = Router();

const userRoute = require("./UserRoute");

routes.use("/users", userRoute);
module.exports = routes;