const express = require("express");
const router = express.Router();

const adminRoute = require("./admin");
const userRoute = require("./user");

const defaultRoute = [
  {
    path: "/admin",
    routes: adminRoute,
  },
  {
    path: "/user",
    routes: userRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.routes);
});

module.exports = router;
