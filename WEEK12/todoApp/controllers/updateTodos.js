const Todo = require("../models/Todo");

exports.updateTodos = async(req,res) => {
    try {
        const {id}= req.params;
        const {title,description} = req.body;

        // Update Data Based on Id
        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title,description,updatedAt: Date.now()}
        )
        
        res.status(200).json({
            success:true,
            data : todo,
            message : "Data Updated Sucessfully"
        })

    } 
    catch (error) { 
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data: "Data Updation Failed",
                message : error.message
            }
        )   
    }
}