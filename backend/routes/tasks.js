const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "Create a new task" });
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
