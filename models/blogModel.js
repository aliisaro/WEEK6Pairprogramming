const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { 
    type: String, 
    required: true },

  content: { 
    type: String, 
    required: true },

  publishedDate: { 
    type: String, 
    required: true },

  published: { 
    type: Boolean, 
    default: false },
});

module.exports = mongoose.model("blog", blogSchema);
