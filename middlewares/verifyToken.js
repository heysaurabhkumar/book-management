const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");

const { User } = require("../models/user");

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
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json({
        success: false,
        message: "User does not exist",
      });
    }
    req.userId = user._id;
    req.isAdmin = user.isAdmin;
    next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;
