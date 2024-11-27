import { tasks } from "./data/tasksData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const completedTasks = tasks.filter((task) => task.state === "completed");
  const inProgressTasks = tasks.filter((task) => task.state !== "completed");

  function generateList(list) {
    return (
      <ul className="list-unstyled">
        {list.map((task, index) => (
          <li key={index}>
            <span className="fw-semibold">
              <span className="fw-bold">{task.title}</span>
              {task.state === "completed" ? (
                <span class="badge rounded-pill text-bg-success text-capitalize mx-2">
                  {task.state}
                </span>
              ) : task.state === "backlog" ? (
                <span class="badge rounded-pill text-bg-secondary text-capitalize mx-2">
                  {task.state}
                </span>
              ) : (
                <span class="badge rounded-pill text-bg-warning text-capitalize mx-2">
                  {task.state}
                </span>
              )}
              <br />
              Priority: {task.priority}
              <br />
              Est. Time: {task.estimatedTime}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  function inProgressTasksList() {
    return (
      <>
        <h2 className="h5 fw-semibold my-3">
          Current Tasks ({inProgressTasks.length})
        </h2>
        {generateList(inProgressTasks)}
      </>
    );
  }

  function completedTasksList() {
    return (
      <>
        <h2 className="h5 fw-semibold my-3">
          Completed Tasks ({completedTasks.length})
        </h2>
        {generateList(completedTasks)}
      </>
    );
  }

  return (
    <>
      <div>
        <div className="bg-primary py-3 px-3">
          <h1 className="fw-semibold">Task Manager</h1>
        </div>
        <div className="px-3">
          {inProgressTasksList()}
          <hr class="border border-secondary border opacity-50" />
          {completedTasksList()}
        </div>
      </div>
    </>
  );
}

export default App;
