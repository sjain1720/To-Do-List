import express from 'express';
import TaskManagement from '../model/TaskManagement';

const router = express.Router();

// Get all tasks
export const getTasks = async (req, res) => {
    const query = 'SELECT * FROM tasks';
    TaskManagement.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            return res.status(500).json({ message: 'Failed to fetch tasks' });
        }
        res.status(200).json(results);
    });
};

// Create a new task
export const createTask = async (req, res) => {
    const { task_name, status} = req.body;
    const query = 'INSERT INTO tasks (task_name, status) VALUES (?, ?)';

    TaskManagement.query(query, [task_name, status || 'In-Progress'], (err, result) => {
        if (err) {
            console.error('Error creating task:', err);
            return res.status(500).json({ message: 'Failed to create task' });
        }
        res.status(201).json({ message: 'Task created', taskId: result.insertId });
    });
};

// Update a task by ID
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { task_name, status} = req.body;
    const query = 'UPDATE tasks SET task_name = ?, status = ? WHERE task_id = ?';

    db.query(query, [task_name, status, id], (err, result) => {
        if (err) {
            console.error('Error updating task:', err);
            return res.status(500).json({ message: 'Failed to update task' });
        }
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task updated successfully' });
    });
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE task_id = ?';

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error deleting task:', err);
            return res.status(500).json({ message: 'Failed to delete task' });
        }
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted successfully' });
    });
};

export default router;
