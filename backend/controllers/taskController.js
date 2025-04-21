const Task = require("../models/taskModel");
const mongoose = require("mongoose");

// GET all tasks
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });

  res.status(200).json(tasks);
};

// GET a single task
const getTaskByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Incorrect format of ID number" });
  }

  const task = await Task.findById(id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

// POST a new task
const createTask = async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  try {
    // Adds to DB
    const task = await Task.create({
      title,
      description,
      status,
      dueDate,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH a task
const updateTaskByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Incorrect format of ID number" });
  }

  const task = await Task.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

// DELETE a task
const deleteTaskByID = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Incorrect format of ID number" });
  }

  const task = await Task.findByIdAndDelete({ _id: id });

  if (!task) {
    return res.status(400).json({ error: "Task not found" });
  }

  res.status(200).json(task);
};

module.exports = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTaskByID,
  deleteTaskByID,
};
