import {useInput} from "./hooks";

const TaskList = ({
                    tasks,
                    onRemove,
                    onRemoveAll,
                    onAdd
                  }) => {
  const [taskProps, resetTask] = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(taskProps.value);
    resetTask();
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
              {...taskProps}
              className="taskInput"
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