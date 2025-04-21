const express = require("express");
const Task = require("../models/taskModel");

//Creates express router
const router = express.Router();

// GET all tasks
router.get("/", (req, res) => {
  res.json({ message: "Get all tasks" });
});

// GET a single task
router.get("/:id", (req, res) => {
  res.json({ message: "Get single task by id" });
});

// POST a new task
router.post("/", async (req, res) => {
  const { title, description, status, dueDate } = req.body;

  try {
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
});

// PATCH a task
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a task" });
});

// DELETE a task
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a task" });
});

module.exports = router;
