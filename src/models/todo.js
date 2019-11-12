const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  work: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
