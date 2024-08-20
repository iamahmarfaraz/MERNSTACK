const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodos} = require("../controllers/updateTodos");
const {deleteTodos} = require("../controllers/deleteTodo");

// define API routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodos);
router.delete("/deleteTodo/:id",deleteTodos);

module.exports = router;