import { useState } from "react";
import "./App.css";
import ItemTask from "./components/ItemTask";

function App() {
  const [tasksArray, setTasksArray] = useState([])
  const [value, setValue] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    // get toutes les infos du form
    const formData = new FormData(event.target);
    // get input name task value
    const value = formData.get("task");
    // copie du tableau actuel et ajout de la task
    const newTasksArray = [...tasksArray, value]
    setTasksArray(newTasksArray);
    setValue("")
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const deleteTask = (index) => {
    const newTasksArray = [...tasksArray]
    newTasksArray.splice(index, 1)
    setTasksArray(newTasksArray)
  }

  return (
    <>
      <header>
        <h1>To DO List</h1>
      </header>
      <div className="flexContainer tasksList">
        {tasksArray.map((task, index) => {
          return (
            <ItemTask 
              key={index}
              id={index}
              task={task}
              deleteTask={deleteTask}
            />
          )
          })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" id="task" value={value} onChange={handleChange} />
        <button>Add task</button>
      </form>
      <footer>
        <p>
          Made with <b>React</b> at <b>Le Reacteur</b> by <b>Rodolphe</b>
        </p>
      </footer>
    </>
  );
}

export default App;
