const { Router } = require("express");
const routes = Router();

const userRoute = require("./UserRoute");
routes.use("/api", userRoute);

const projectRoute = require("./ProjectRoute");
routes.use("/api", projectRoute);

const activityRoute = require("./ActivityRoute");
routes.use("/api", activityRoute);

module.exports = routes;
