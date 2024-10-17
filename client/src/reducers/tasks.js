import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
const faketasks = [ {
    task_id: 1,
    task_name: 'Hello',
    status: 'In-Progress'
},
{
    task_id: 2,
    task_name: 'Hello2',
    status: 'Pending'
},
{
    task_id: 3,
    task_name: 'Hello3',
    status: 'Completed'
}];
// Reducer for handling tasks
export default (tasks = faketasks, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case UPDATE:
      return tasks.map((task) => (task.task_id === action.payload.task_id ? action.payload : task));
    case DELETE:
      return tasks.filter((task) => task.task_id !== action.payload.task_id);
    default:
      return tasks;
  }
};
