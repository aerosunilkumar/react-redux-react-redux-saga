import * as types from "../actions/types";
import initialState from "./initialState";
export default (state = initialState.addTaskData, action) => {
  switch (action.type) {
    case types.INIT_UPDATE_TODO:
    return {
      ...state,
      id:action.payload.id,
      title:action.payload.title,
      description:action.payload.description,
      completed:action.payload.completed,
      addOrUpdateError:undefined,
      isLoading:false
    };
    case types.FETCH_ADD_TODO_STARTED:
      return {
        ...state,
        addOrUpdateError:undefined,
        isLoading:true
      };
    case types.FETCH_ADD_TODO_SUCCEEDED:
      return {
        ...state,
        id:0,
        title:"",
        description:"",
        completed:false,
        addOrUpdateError:undefined,
        isLoading:false
      };
      case types.FETCH_ADD_TODO_FAILED:
      return {
        ...state,
        addOrUpdateError:action.payload,
        isLoading:false
      };
      case types.FETCH_UPDATE_TODO_STARTED:
      return {
        ...state,
        addOrUpdateError:undefined,
        isLoading:true
      };
    case types.FETCH_UPDATE_TODO_SUCCEEDED:
      return {
        ...state,
        id:0,
        title:"",
        description:"",
        completed:false,
        addOrUpdateError:undefined,
        isLoading:false
      };
      case types.FETCH_UPDATE_TODO_FAILED:
      return {
        ...state,
        addOrUpdateError:action.payload,
        isLoading:false
      };
    default:
      return state;
  }
};
