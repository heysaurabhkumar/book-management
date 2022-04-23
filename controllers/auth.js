const httpStatus = require("http-status");
const { catchAsync } = require("../utils");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const registerUser = catchAsync(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    isAdmin,
  });

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "User created successfully",
    data: {
      user: {
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      },
    },
  });
});

const loginUser = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "User does not exist",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Incorrect password",
    });
  }

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
  });

  res.status(httpStatus.OK).json({
    success: true,
    message: "User logged in successfully",
    data: {
      user: {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    },
  });
});

module.exports = {
  registerUser,
  loginUser,
};
