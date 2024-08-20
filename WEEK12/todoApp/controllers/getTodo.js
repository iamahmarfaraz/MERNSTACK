const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) => {
    try {
        // fetch all the todo items from DB
        const todos = await Todo.find({});

        
        res.status(200).json(
            {
                success:true,
                data:todos,
                message : "Entire Todo Data Fetched"
            }
        )
    } 
    catch (error) { 
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data: "Data Fetching Failed",
                message : error.message
            }
        )   
    }
}

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        // fetch todo items from DB basis of Id
        const todo = await Todo.findById({_id : id});

        // Data for Given Id Not Found
        if(!todo){
            return res.status(404).json({
                success : false,
                message: "No Data Found with the given Id"
            }) 
        }
        // Data for Given Id Found
        else{
            return res.status(200).json({
                success:true,
                data:todo,
                message:"Data Found with the given Id"
            })
        }
    } 
    catch (error) { 
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data: "Data Fetching Failed",
                message : error.message
            }
        )   
    }
}