const express = require("express");
const router = express.Router();

const authRoute = require("./auth");
const bookRoute = require("./book");

const defaultRoute = [
  {
    path: "/auth",
    routes: authRoute,
  },
  {
    path: "/book",
    routes: bookRoute,
  },
];

defaultRoute.forEach((route) => {
  router.use(route.path, route.routes);
});

module.exports = router;
