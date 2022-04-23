const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ sucess: true, message: "Welcome to book management user route" });
});

module.exports = router;
