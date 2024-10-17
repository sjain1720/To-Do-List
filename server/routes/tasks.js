import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from "../contollers/tasks";

const router = express.Router();

// Route to get all tasks
router.get('/', getTasks);

// Route to create a new task
router.post('/', createTask);

// Route to update a specific task by ID
router.patch('/:id', updateTask);

// Route to delete a specific task by ID
router.delete('/:id', deleteTask);

export default router;
