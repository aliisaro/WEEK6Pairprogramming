const mongoose = require("mongoose");
const ToDoSchema = require("../models/todoTaskModel");

// get all TodoTasks
const getTodoTasks = async (req, res) => {
  try {
    const tasks = await ToDoSchema.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  res.status(200).json({ message: "Hello from getTodoTasks" });
};

// Add one TodoTask
const addTodoTask = async (req, res) => {
  try {
    const {title, description, dueDate, completed, user_id} = req.body;
    if (!title || !description || !dueDate || !completed || !user_id) {
      return res
        .status(400)
        .json({ error: "All fields are required" });
    }

    const newTask= new Task({ title, description, dueDate, completed, user_id});
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (err) {
    console.error('Error in add task:');
    res.status(500).json({ error: "Internal Server Error" });
  }

  res.status(200).json({ message: "Hello from addTodoTask" });
};

// Get TodoTask by ID
const getTodoTask = async (req, res) => {
  try {
    const task = await ToDoSchema.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg:"task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(200).json({ message: "Hello from getTodoTask" });
};

// Delete TodoTask by ID
const deleteTodoTask = async (req, res) => {
  try {
    const task = await ToDoSchema.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    }
    res.json({ msg: "task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(200).json({ message: "Hello from deleteTodoTask" });
};

// Update TodoTask by ID
const updateTodoTask = async (req, res) => {
  try {
    const task = await ToDoSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  res.status(200).json({ message: "Hello from updateTodoTask" });
};

module.exports = {
  getTodoTasks,
  addTodoTask,
  getTodoTask,
  deleteTodoTask,
  updateTodoTask,
};
