const Todo = require("../models/Todo");

// define route handler

exports.createTodo = async(req,res) => {
    try {
        // Extract "title" and "description" from request body
        const {title,description} = req.body;
        // create a new Todo obj and insert it in DB
        const response = await Todo.create({title,description});
        // Send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message : "Entry Created Successfully"
            }
        )
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data: "Internal Server error",
                message : error.message
            }
        )    

    }
}
