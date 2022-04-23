const express = require("express");
const router = express.Router();

const { auth } = require("../controllers");

router.get("/", (req, res) => {
  res.json({ sucess: true, message: "Welcome to book management auth route" });
});

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);

module.exports = router;
