const express = require("express");
const router = express.Router();

// import controllers
const{signup,login} = require("../controllers/auth");
const {auth,isStudent,isAdmin} = require("../middlewares/auth");

router.post("/signup",signup);
router.post("/login",login);

// Protected Routes
router.get("/student",auth,isStudent,(req,res) => {
    res.json({
        success:true,
        message:"Welcome to the protected route for students"
    });
});

router.get("/admin",auth,isAdmin,(req,res) => {
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin "
    });
});

module.exports = router;