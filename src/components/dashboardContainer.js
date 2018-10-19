import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  featchToDoItemsList,
  featchCompleteToDoItem,
  initTodoItemForUpdate,
  featchDeleteToDoItem
} from "../actions/index";
import Dashboard from './dashboard';

const mapStateToProps = state => ({
  todoList: state.dashboardData.todoList,
  isLoading: state.dashboardData.isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    featchToDoItemsList,
    featchCompleteToDoItem,
    initTodoItemForUpdate,
    featchDeleteToDoItem
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
