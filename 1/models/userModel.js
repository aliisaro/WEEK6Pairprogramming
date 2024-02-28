const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true },

  hashedPassword: { 
    type: String, 
    required: true },
});

module.exports = mongoose.model("user", userSchema);
