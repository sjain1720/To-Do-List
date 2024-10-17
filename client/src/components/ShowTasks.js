import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { updateTask, deleteTask } from '../actions/tasks';
import ShowTask from './ShowTask';

const ShowTasks = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  // Get tasks from the Redux store
  const tasks = useSelector((state) => state.tasks); // Adjust the state path as necessary
  
  const onDelete = (taskId) => {
    console.log("delete");
    dispatch(deleteTask(taskId)); // Dispatch the delete action with the task ID
  };

  const onUpdateTask = (taskId, updatedTask) => {
    dispatch(updateTask(taskId, updatedTask));
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <ShowTask task={task} onUpdateTask={onUpdateTask} onDelete={onDelete} /> // Pass each task to ShowTask
        ))
      )}
    </div>
  );
};

export default ShowTasks;
