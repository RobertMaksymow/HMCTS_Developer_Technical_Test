import React, { useState } from "react";

const TaskDetails = ({ task, onEditClick }) => {
  const handleDelete = async () => {
    const response = await fetch(
      "https://hmcts-developer-technical-test.onrender.com/api/tasks/" +
        task._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      window.location.reload();
      console.log("Task deleted:", json);
    }
    if (!response.ok) {
      console.error("Error deleting task:", json.error);
    }
  };

  const handleEdit = async () => {
    const response = await fetch(
      "https://hmcts-developer-technical-test.onrender.com/api/tasks/" +
        task._id,
      {
        method: "PATCH",
      }
    );
    const json = await response.json();

    if (response.ok) {
      console.log("Task edited:", json);
      // window.location.reload(); // Reload the page to see the new task TEMPORARY
    }
    if (!response.ok) {
      console.error("Error editing task:", json.error);
    }
  };

  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>
        <strong>Description: </strong>
        {task.description}
      </p>
      <p>
        <strong>Status: </strong>
        {task.status}
      </p>
      <p>
        <strong>Deadline: </strong>
        {new Date(task.dueDate).toLocaleDateString("en-GB", {
          timeZone: "UTC",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </p>
      <p id="created-at">
        Created At:{" "}
        {new Date(task.createdAt).toLocaleDateString("en-GB", {
          timeZone: "UTC",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })}
      </p>
      {/* <p>
        <strong>Created at: </strong>
        {task.createdAt}
      </p> */}
      <div className="delete-edit">
        <span
          className="material-symbols-outlined"
          id="delete-icon"
          onClick={handleDelete}
        >
          Delete
        </span>
        <span
          className="material-symbols-outlined"
          id="edit-icon"
          onClick={() => onEditClick(task)}
        >
          Edit_Note
        </span>
      </div>
    </div>
  );
};

export default TaskDetails;
