import React from 'react';
import './ProgressBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddingTask } from '../actions/setIsAddingTask'; // Ensure this is imported correctly

const ProgressBar = () => {
    const dispatch = useDispatch(); // Initialize dispatch
    const tasks = useSelector((state) => state.tasks); // Access tasks from Redux store

    // Count the number of tasks with status "In-Progress"
    const inProgressCount = tasks.filter(task => task.status === 'In-Progress').length;

    // Handle Add Task button click
    const onAddTaskClick = () => {
        dispatch(setIsAddingTask(true)); // Dispatch action to set adding task state
    };

    return (
        <div className="progress-bar">
            <div className="progress-info">
                <span>In progress ({inProgressCount})</span> {/* Display count of in-progress tasks */}
            </div>
            <div className="add-task-button">
                <button onClick={onAddTaskClick} className="add-button">
                    <span className="add-icon">+</span> {/* Icon as a separate span */}
                    <span className="add-text">Add New Task</span> {/* Text as a separate span */}
                </button>
            </div>
        </div>
    );
};

export default ProgressBar;
