import * as types from "../actions/types";
import initialState from "./initialState";

export default (state = initialState.dashboardData, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_STARTED:
    case types.FETCH_ADD_TODO_STARTED:
    case types.FETCH_UPDATE_TODO_STARTED:
    case types.FETCH_DELETE_TODO_STARTED:
    case types.FETCH_COMPLETE_TODO_STARTED:
      return {
        ...state,
        isLoading: true,
        fetchTodoListError: undefined,
      };
    case types.FETCH_UPDATE_TODO_SUCCEEDED:
    case types.FETCH_TODOS_SUCCEEDED:
    case types.FETCH_DELETE_TODO_SUCCEEDED:
    case types.FETCH_COMPLETE_TODO_SUCCEEDED:
    case types.FETCH_ADD_TODO_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        todoList: action.payload,
        fetchTodoListError: undefined,
      };
    case types.FETCH_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        todoList: [],
        fetchTodoListError: action.payload,
      };
    case types.FETCH_COMPLETE_TODO_FAILED:
      return {
        ...state,
        fetchTodoListError: action.payload,
        isLoading: false
      };
    case types.FETCH_DELETE_TODO_FAILED:
      return {
        ...state,
        fetchTodoListError: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
