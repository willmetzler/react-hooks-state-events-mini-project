import React, {useState} from "react";


function NewTaskForm({categories, tasks, setTasks, onTaskFormSubmit}) {

  const [newTaskData, setNewTaskData] = useState({
    task: '',
    category:''
  })

  const mappedCategories = categories
  .filter(category => category !== "All")
  .map(category => (
    <option key={category}>{category}</option>
  ));


  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTaskData)
    /*return (
      setTasks([...tasks, newTaskData])
    )*/
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
        type="text" 
        name="task"
        value={newTaskData.text}
        onChange={(event) => {
          setNewTaskData( {...newTaskData, text: event.target.value} )}} />
      </label>
      <label>
        Category
        <select name="category"
        value={newTaskData.category}
        onChange={(event) => setNewTaskData( {...newTaskData, category: event.target.value} )}
        >
          {mappedCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
