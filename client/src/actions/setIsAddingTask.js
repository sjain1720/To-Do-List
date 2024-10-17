import { SET_IS_ADDING_TASK } from "../constants/actionTypes";

// Action creator using redux-thunk
export const setIsAddingTask = (data) => {
  return (dispatch) => {
    try {
      // Dispatch the action to the reducer
      dispatch({ type: SET_IS_ADDING_TASK, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
