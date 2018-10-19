import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  featchAddToDoItem,
  featchUpdateToDoItem,
  featchCompleteToDoItem,
  featchDeleteToDoItem
} from "../actions/index";
import AddTask from './addTask';


const mapStateToProps = state => ({
  title: state.addTaskData.title,
  description: state.addTaskData.description,
  id: state.addTaskData.id,
  completed: state.addTaskData.completed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    featchAddToDoItem,
    featchUpdateToDoItem ,
    featchCompleteToDoItem,
    featchDeleteToDoItem
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
