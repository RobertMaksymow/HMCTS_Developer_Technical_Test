import React from "react";

const TaskDetails = ({ task }) => {
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
        {task.dueDate}
      </p>
      {/* <p>
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
      </p> */}
      <p>
        <strong>Created at: </strong>
        {task.createdAt}
      </p>
    </div>
  );
};

export default TaskDetails;
