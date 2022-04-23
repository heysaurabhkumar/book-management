const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const adminRoute = require("./admin");
const userRoute = require("./user");

const defaultRoute = [
  {
    path: "/auth",
    routes: authRoute,
  },
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
