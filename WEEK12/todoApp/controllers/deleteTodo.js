const Todo = require("../models/Todo");

exports.deleteTodos = async(req,res) => {
    try {
        const {id}= req.params;

        // Update Data Based on Id
        await Todo.findByIdAndDelete(id); 
        
        res.status(200).json({
            success:true,
            message : "Data Deleted Sucessfully"
        })

    } 
    catch (error) { 
        console.error(error);
        console.log(error);
        res.status(500).json(
            {
                success:false,
                data: "Data Deletion Failed",
                message : error.message
            }
        )   
    }
}