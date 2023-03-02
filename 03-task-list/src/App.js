import TaskList from './TaskList'
import {useState} from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleRemove = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  const handleRemoveAll = () => {
    setTasks([]);
  }

  const handleAdd = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="App">
      <TaskList
        tasks={tasks}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
    </main>
  );
}

export default App;
