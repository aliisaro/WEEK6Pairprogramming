const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
  title: { 
    type: String, 
    required: true },
  description: { 
    type: String, 
    required: true, 
    default: "" },

  dueDate: { 
    type: Date, 
    required: true },

  completed: { 
    type: Boolean, 
    required: true, 
    default: false },

  user_id: { 
    type: String, 
    required: true },
});

module.exports = mongoose.model("todo", ToDoSchema);
