import Header from "./components/Header";
import Tasks from "./components/Tasks";
import CompletedTask from "./components/CompletedTask";
import ActiveTask from "./components/ActiveTask";
import { useState } from "react";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Assignment 2",
      status: true,
    },
    {
      id: 2,
      title: "Visit Detroit",
      status: false,
    },
    {
      id: 3,
      title: "Hit Gym",
      status: true,
    },
  ]);
  const addTask = (title) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const status = false;
    const newtask = { id, title, status };
    setTasks([...tasks, newtask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <>
      <div className="add_container">
        <AddTask addTask={addTask} />
      </div>

      <div className="container">
        <div className="task_container">
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              updateStatus={updateStatus}
              onDelete={deleteTask}
            />
          ) : (
            "No tasks "
          )}
        </div>



        <div className="task_container">
          {tasks.length > 0 ? (
            <ActiveTask
              tasks={tasks}
              updateStatus={updateStatus}
              onDelete={deleteTask}
            />
          ) : (
            "No Active tasks "
          )}
        </div>

        <div className="task_container">
          {tasks.length > 0 ? (
            <CompletedTask
              tasks={tasks}
              setTasks={setTasks}
              updateStatus={updateStatus}
              onDelete={deleteTask}
            />
          ) : (
            "No Completed tasks "
          )}
        </div>
      </div>
    </>
  );
}

export default App;
