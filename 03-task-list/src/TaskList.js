import React, { useEffect, useState, useRef } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const taskInput = useRef(null);

  const addTask = () => {
    const task = taskInput.current.value;
    taskInput.current.value = "";
    const new_tasks = tasks.concat([task]);
    setTasks(new_tasks);
  }

  const removeTask = (index) => {
    const new_tasks = tasks.filter((task, i) => index !== i);
    setTasks(new_tasks);
  }

  const clearTasks = () => {
    setTasks([]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  }

  useEffect(() => {
    console.log('update');
  }, [tasks]);

  return (
    <section className="container">
      <header>
        <h1>Task List</h1>
        <button id="clear" onClick={clearTasks}>Clear all</button>
      </header>
      <div className="taskList">
        <div className="formContainer">
          <form className="taskForm" onSubmit={handleSubmit}>
            <input className="taskInput" ref={taskInput} placeholder="What would you like to do today?" />
          </form>
        </div>
        <ul className="taskList">
          {tasks.map((task, index) => {
            return (<li onClick={() => { removeTask(index) }} key={index}>{task}</li>)
          })}
        </ul>
      </div>
    </section>
  )
}

export default TaskList;