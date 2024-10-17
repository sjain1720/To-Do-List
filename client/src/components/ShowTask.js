import React, { useState, useEffect, useRef } from 'react';
import './ShowTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faEllipsisH, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const ShowTask = ({ task, onUpdateTask, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const dropdownRef = useRef(null);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'in-progress':
        return 'status-progress';
      case 'pending':
        return 'status-pending';
      case 'completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleStatusChange = (newStatus) => {
    const updatedTask = {
      ...task,             // Spread the existing task properties
      status: newStatus,
    };
    onUpdateTask(task.id, updatedTask);
    setShowDropdown(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setNewTaskName(""); // Reset the input to the current task name
  };

  const handleUpdateTaskName = () => {
    // Create a new task object with the updated task name
    const updatedTask = {
      ...task,             // Spread the existing task properties
      task_name: newTaskName, // Update the task_name with the new value
    };

    onUpdateTask(task.id, updatedTask); // Pass the entire updated task object
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false); // Cancel editing
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="task-container">
      <div className="left-section">
        {isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              className="edit-input"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              placeholder={task.task_name}
            />
          </div>
        ) : (
          <>
            <h3 className="task-name">{task.task_name}</h3>
            <p className={`task-status ${getStatusClass(task.status)}`}>
              {task.status}
            </p>
          </>
        )}
      </div>

      <div className="right-section">
        {isEditing ? (
          <>
            <button className="icon-button" onClick={handleUpdateTaskName}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="icon-button" onClick={handleCancelEdit}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </>
        ) : (
          <>
            <button className="icon-button" onClick={handleEditClick}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <button className="icon-button" onClick={() => onDelete(task.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>

            <div className="dropdown-container" ref={dropdownRef}>
              <button className="icon-button" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>

              {showDropdown && (
                <div className="dropdown-menu">
                  <button className="status-set-pending" onClick={() => handleStatusChange('Pending')}>
                    Pending
                  </button>
                  <button className="status-set-in-progress" onClick={() => handleStatusChange('In-Progress')}>
                    In Progress
                  </button>
                  <button className="status-set-completed" onClick={() => handleStatusChange('Completed')}>
                    Completed
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowTask;
