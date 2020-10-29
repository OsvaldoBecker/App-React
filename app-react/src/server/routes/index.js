const { Router } = require("express");
const routes = Router();

const activityRoute = require("./activityRoute");
const projectRoute = require("./projectRoute");
const userRoute = require("./userRoute");

routes.use("/api", activityRoute);
routes.use("/api", projectRoute);
routes.use("/api", userRoute);
module.exports = routes;