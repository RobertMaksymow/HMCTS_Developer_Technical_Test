import React from "react";

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <h4>{task.title}</h4>
      <p>Description: {task.description}</p>
      <p>
        <strong>Status: </strong>
        {task.status}
      </p>
      <p>
        <strong>Deadline: </strong>
        {task.dueDate}
      </p>
      {/* <p>Created At: {new Date(task.createdAt).toLocaleDateString()}</p> */}
      <p>
        <strong>Created at: </strong>
        {task.createdAt}
      </p>
    </div>
  );
};

export default TaskDetails;
