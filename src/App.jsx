import { useState } from "react";
import { tasks } from "./data/tasksData";
import "./App.css";

function App() {
  const completedTasks = tasks.filter((task) => task.state === "completed");
  const inProgressTasks = tasks.filter((task) => task.state !== "completed");

  function completedTasksList() {
    return (
      <>
        <h2>Lista Attività Completate</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>
              <span>
                <strong>Titolo:</strong> {task.title}
                <br />
                <strong>Priorità:</strong> {task.priority}
                <br />
                <strong>Tempo Stimato:</strong> {task.estimatedTime}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function inProgressTasksList() {
    return (
      <>
        <h2>Lista Attività Da Completare</h2>
        <ul>
          {inProgressTasks.map((task, index) => (
            <li key={index}>
              <span>
                <strong>Titolo:</strong> {task.title}
                <br />
                <strong>Priorità:</strong> {task.priority}
                <br />
                <strong>Tempo Stimato:</strong> {task.estimatedTime}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      {inProgressTasksList()}
      {completedTasksList()}
    </>
  );
}

export default App;
