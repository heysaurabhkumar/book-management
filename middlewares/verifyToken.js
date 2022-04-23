const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "No token provided",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded._id;
    req.isAdmin = decoded.isAdmin;
    next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
