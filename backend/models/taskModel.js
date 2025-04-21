const mongoose = require("mongoose");

//Schema defines a structure of document
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// Model apply that Schema to a particular model
// then we use that model to interact with a collection of that name
module.exports = mongoose.model("Task", taskSchema);
