import * as types from "./types";

export const featchToDoItemsList = () => ({ type: types.FETCH_TODOS_STARTED });
export const featchAddToDoItem = todoItem => ({ type: types.FETCH_ADD_TODO_STARTED, todoItem });
export const featchUpdateToDoItem = todoItem => ({ type: types.FETCH_UPDATE_TODO_STARTED, todoItem });
export const featchDeleteToDoItem = todoItem => ({ type: types.FETCH_DELETE_TODO_STARTED, todoItem });
export const featchCompleteToDoItem = todoItem => ({ type: types.FETCH_COMPLETE_TODO_STARTED, todoItem });
export const initTodoItemForUpdate = todoItem => ({ type: types.INIT_UPDATE_TODO, payload: todoItem });