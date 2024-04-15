import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  let id = 0;
  return (
    <div className="tasks">
      {tasks.map(task => <Task id={id++} text={task.text} category={task.category}/>)}
    </div>
  );
}

export default TaskList;


