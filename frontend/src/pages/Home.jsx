import React, { useEffect, useState } from "react";
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
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

    fetchAllTasks();
  }, []);
  return (
    <div className="home">
      <div className="tasks">
        {tasks &&
          tasks.map((task) => <TaskDetails key={task._id} task={task} />)}
      </div>
      <TaskForm />
    </div>
  );
};

export default Home;
