const initialState = {
    dashboardData: {
        isLoading: false,
        todoList: [],
        fetchTodoListError: undefined,
    },
    addTaskData :{
        id:0,
        title:"",
        description:"",
        completed:false,
        addOrUpdateError:undefined,
        isLoading:false
    }
};

export default initialState;