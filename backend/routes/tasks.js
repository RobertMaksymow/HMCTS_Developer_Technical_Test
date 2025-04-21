const express = require("express");
const {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTaskByID,
  deleteTaskByID,
} = require("../controllers/taskController");

//Creates express router
const router = express.Router();

// GET all tasks
router.get("/", getAllTasks);

// GET a single task
router.get("/:id", getTaskByID);

// POST a new task
router.post("/", createTask);

// PATCH a task
router.patch("/:id", updateTaskByID);

// DELETE a task
router.delete("/:id", deleteTaskByID);

module.exports = router;
