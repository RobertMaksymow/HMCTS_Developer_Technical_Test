import React, { useEffect, useState } from "react";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  const fetchAllTasks = async () => {
    // LOCAL DEVELOPMENT
    // const response = await fetch("http://localhost:4000/api/tasks");
    // PRODUCTION
    const response = await fetch(
      "https://hmcts-developer-technical-test.onrender.com/api/tasks"
    );
    const json = await response.json();

    if (response.ok) {
      setTasks(json);
    }
  };

  useEffect(() => {
    console.log("fetching tasks...");

    fetchAllTasks();
  }, []);
  return (
    <div className="home">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => (
            <TaskDetails
              key={task._id}
              task={task}
              onEditClick={setEditingTask}
            />
          ))}
      </div>
      <TaskForm
        editingTask={editingTask}
        clearEditingTask={() => setEditingTask(null)}
      />
    </div>
  );
};

export default Home;
