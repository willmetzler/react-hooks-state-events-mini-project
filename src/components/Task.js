import React from "react";

function Task({task, tasks, setTasks}) {

  function handleDelete(){
    const undeletedTasks = tasks.filter( (t) => t.id !== task.id)
    setTasks(() => undeletedTasks)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;