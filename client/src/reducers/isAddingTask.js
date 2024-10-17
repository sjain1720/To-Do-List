import { SET_IS_ADDING_TASK } from '../constants/actionTypes';

// Reducer for handling tasks
export default (isAddingTask = false, action) => {
  if (action.type === SET_IS_ADDING_TASK ) {
    return action.payload;
  }
  return isAddingTask;
};
