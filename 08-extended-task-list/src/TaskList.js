import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { addTask, removeTask, clearTasks, loadTasksFromLocalStorage } from './todoReducer';

const mapStateToProps = state => ({
  tasks: state.tasks
})

const TaskList = props => {
  const taskInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = taskInput.current.value;
    if (task === "") return;
    taskInput.current.value = "";
    props.addTask(task);
  }

  useEffect(() => {
    console.log('update');
  }, [props.tasks]);

  useEffect(() => {
    props.loadTasksFromLocalStorage();
  }, [])

  return (
    <section className="container">
      <header>
        <h1>Task List</h1>
        <button id="clear" onClick={props.clearTasks}>Clear all</button>
      </header>
      <div className="taskList">
        <div className="formContainer">
          <form className="taskForm" onSubmit={handleSubmit}>
            <input className="taskInput" ref={taskInput} placeholder="What would you like to do today?" />
          </form>
        </div>
        <ul className="taskList">
          {props.tasks.map((task, index) => {
            return (<li onClick={() => { props.removeTask(index); }} key={index}>{task}</li>)
          })}
        </ul>
      </div>
    </section>
  )
}

export default connect(mapStateToProps, { addTask, removeTask, clearTasks, loadTasksFromLocalStorage })(TaskList);