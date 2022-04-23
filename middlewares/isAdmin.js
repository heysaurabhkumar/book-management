const httpStatus = require("http-status");

const isAdmin = async (req, res, next) => {
  if (!req.isAdmin) {
    console.log("here");
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "You are not authorized to perform this action",
    });
  }
  next();
};

module.exports = isAdmin;
