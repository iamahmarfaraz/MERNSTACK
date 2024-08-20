const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse JSON req body
app.use(express.json());

// import routes for Todo Api
const todoRoutes = require("./routes/todos");
// mount the todo API routes
app.use("/api/v1",todoRoutes);


// start server
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`) 
})

// connect DB
const dbConnect = require("./config/database");
dbConnect();


// Default Route (Mandatory)
app.get("/",(req,res)=>{
    res.send(`<h1>Homepage</h1>`)
})

