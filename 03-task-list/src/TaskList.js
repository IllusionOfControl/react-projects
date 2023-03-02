import { useRef } from 'react';

const TaskList = ({
                    tasks,
                    onRemove,
                    onRemoveAll,
                    onAdd
                  }) => {
  const taskInput = useRef(null);

  const addTask = () => {
    const newTask = taskInput.current.value;
    taskInput.current.value = "";
    onAdd(newTask);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  }

  return (
    <section className="container">
      <header>
        <h1>Task List</h1>
        <button id="clear" onClick={onRemoveAll}>Clear all</button>
      </header>
      <div className="taskList">
        <div className="formContainer">
          <form className="taskForm" onSubmit={handleSubmit}>
            <input
              className="taskInput"
              ref={taskInput}
              placeholder="What would you like to do today?"
            />
          </form>
        </div>
        <ul className="taskList">
          {tasks.map((task, index) => {
            return (<li onClick={() => { onRemove(index) }} key={index}>{task}</li>)
          })}
        </ul>
      </div>
    </section>
  )
}

export default TaskList;