import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index';  // Adjust to match your API file path

// Action creator to fetch all tasks
export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks(); // Calls the API to fetch tasks

    dispatch({ type: FETCH_ALL, payload: data }); // Dispatch the action to the reducer
  } catch (error) {
    console.log(error.message);
  }
};

// Action creator to create a new task
export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task); // Calls the API to create a new task

    dispatch({ type: CREATE, payload: data }); // Dispatch the action to the reducer
  } catch (error) {
    console.log(error.message);
  }
};

// Action creator to update an existing task by task_id
export const updateTask = (task_id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTask(task_id, task); // Calls the API to update a task by task_id

    dispatch({ type: UPDATE, payload: data }); // Dispatch the updated task to the reducer
  } catch (error) {
    console.log(error.message);
  }
};

// Action creator to delete a task by task_id
export const deleteTask = (task_id) => async (dispatch) => {
  try {
    await api.deleteTask(task_id); // Calls the API to delete the task by task_id
    console.log("delete task");
    dispatch({ type: DELETE, payload: task_id }); // Dispatch the task_id to the reducer for removal
  } catch (error) {
    console.log(error.message);
  }
};
