import axios from 'axios';

const url = 'http://localhost:5000/tasks'; // Base URL for tasks

// API calls for tasks
export const fetchTasks = () => axios.get(url); // Fetch all tasks
export const createTask = (newTask) => axios.post(url, newTask); // Create a new task
export const updateTask = (id, updatedTask) => axios.patch(`${url}/${id}`, updatedTask); // Update a task by ID
export const deleteTask = (id) => axios.delete(`${url}/${id}`); // Delete a task by ID
