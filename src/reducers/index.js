import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer'
import addTaskReducer from './addTaskReducer'

export default combineReducers({
  "dashboardData": dashboardReducer,
  "addTaskData": addTaskReducer
});
