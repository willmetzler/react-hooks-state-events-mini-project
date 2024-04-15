import React from "react";
import Task from "./Task"

function TaskList({tasks, selected, setTasks}) {

  const filteredTasks = selected 
  ? tasks.filter(task => task.category === selected)
  : tasks;

  const mappedTasks = filteredTasks.map(task => {
    return <Task task={task} tasks={tasks} setTasks={setTasks} key={task.id} />})


  return (
    <div key={tasks} className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;


