const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
require("./config");
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ sucess: true, message: "Welcome to book management" });
});

app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
