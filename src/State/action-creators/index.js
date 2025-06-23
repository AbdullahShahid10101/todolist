// action-creators/index.js

export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task
});
export const updateTask = (updatedTask) => ({
  type: UPDATE_TASK,
  payload: updatedTask,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});

export const markComplete = (id, taskstatus) => ({
  type: COMPLETE_TASK,
  payload: { id, taskstatus }
});


