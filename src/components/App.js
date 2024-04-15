import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selected, setSelected] = useState(null)
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}
        selected={selected}
        setSelected={setSelected}/>
      <NewTaskForm tasks={tasks} setTasks={setTasks} categories={categories} onTaskFormSubmit={(task) => setTasks([...tasks, task])}/>
      <TaskList tasks={tasks} categories={categories} setTasks={setTasks} selected={selected}/>
    </div>
  );
}

export default App;