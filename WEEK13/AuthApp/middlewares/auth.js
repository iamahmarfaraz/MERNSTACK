//  auth,isStudent,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    // extract JWT Token
    console.log("server started");
    // const token =
    //   req.cookies.token ||
    //   req.body.token ||
    //   req.header("Authorization").replace("Bearer ", "");

    const token =
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");

      console.log("Middleware reached");
      console.log("Token received:", token);


    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }
    // verify the token
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // req me Decoded JWT Token (decode) is liye bheja hai kyunki aage jake
      // isStudent isAdmin wale middleware me verify krna hai "role" and role
      // jo hai wo payload me para hai and payload JWT Token me thi
      req.user = decode;
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Token in Invalid",
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Students",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "User role is not matching",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.body.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Admin",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "User role is not matching",
    });
  }
};
