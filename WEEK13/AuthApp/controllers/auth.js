const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    // secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.log("Bcrypt Error:", error);
      return res.status(500).json({
        success: false,
        message: "Error in Hashing password",
        error: error.message,
      });
    }

    // create entry new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User can't be registered, Please Try again later",
    });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation of Email and Password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the field carefully  ",
      });
    }

    // Check For Registered User
    let existingUser = await User.findOne({ email });

    if (!existingUser) {
      //  No User Found
      return res.status(401).json({
        success: false,
        message: "No User Found",
      });
    }

    const payload = {
      email: existingUser.email,
      id: existingUser._id,
      role: existingUser.role,
    }; 
    // Verify Password and generate JWT Token
    if (await bcrypt.compare(password, existingUser.password)) {
      // Password Matched
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });

      existingUser = existingUser.toObject();
      existingUser.token = token;
      // Database se password nhi hataya hai blke existingUser object jo hmne fetch kiya hai
      // usse hataya hai
      existingUser.password = undefined;

      const options = {
        //expires in 3 days
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        // Client side pe access nhi kr paogi
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        existingUser,
        message: "User LoggedIn Succesfully",
      });
    } 
    
    else {
      // Password not matched
      return res.status(403).json({
        success: false,
        message: "Password Incorrect",
      });
    }

  } 


  catch (error) {
    console.log(error);
    res.status(500).json({
        success:false,
        message:"Login Failed"
    })
  }
};
