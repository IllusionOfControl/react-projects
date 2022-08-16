let initialState = {
  tasks: []
}

// Types

const SET_TASKS = 'SET_TASKS';

// Reducer

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      localStorage.setItem('tasks', JSON.stringify(action.payload));
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state
  }
};

// Action creators

export const setTasks = payload => ({ type: SET_TASKS, payload });

export const addTask = (task) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setTasks(state.tasks.concat([task])));
  }
}

export const removeTask = (task_index) => {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch(setTasks(state.tasks.filter((_, index) => task_index !== index)));
  }
}

export const clearTasks = () => {
  return async (dispatch) => {
    dispatch(setTasks([]));
  }
}

export const loadTasksFromLocalStorage = () => {
  return async (dispatch) => {
    dispatch(setTasks(JSON.parse(localStorage.getItem('tasks')) || []));
  }
}

export default todoReducer;