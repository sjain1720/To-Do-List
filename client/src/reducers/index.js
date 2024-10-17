import { combineReducers } from 'redux';
import isAddingTask from './isAddingTask';
import tasks from './tasks';

export const reducers = combineReducers({ tasks, isAddingTask });
