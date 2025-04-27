import React, { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description, status, dueDate };

    const response = await fetch(
      "https://hmcts-developer-technical-test.onrender.com/api/tasks",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setStatus("");
      setDueDate("");
      setError(null);
      window.location.reload(); // Reload the page to see the new task TEMPORARY
      console.log("New task added:", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new task</h3>
      <label>Task Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Task Description:</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <label>Task Status:</label>
      <select
        name="tasks"
        id="tasks"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      >
        <option value="">Select a status</option>
        <option value="To be done">To be done</option>
        <option value="In progress">In progress</option>
        <option value="On hold">On hold</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Done">Done</option>
      </select>

      <label>Task Due Date:</label>
      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
      />
      <button className="btn">Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default TaskForm;
