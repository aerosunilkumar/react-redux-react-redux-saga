import React, { Component } from "react";
import PropTypes from "prop-types";
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  strike: {
    "text-decoration": "line-through"
  },
  margin: {
    "margin": "10px"
  },
  padding: {
    "padding": "10px"
  }
});

class Dashboard extends Component {
  static propTypes = {
    todoList: PropTypes.array,
    isLoading: PropTypes.bool,
    featchToDoItemsList: PropTypes.func.isRequired,
    initTodoItemForUpdate: PropTypes.func.isRequired,
    featchCompleteToDoItem: PropTypes.func.isRequired,
    featchDeleteToDoItem: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if (this.props.todoList.length === 0) {
      this.props.featchToDoItemsList();
    }
  }

  complete = todoItem => () => {
    this.props.featchCompleteToDoItem(todoItem);
  }

  edit = todoitem => () => {
    this.props.initTodoItemForUpdate(todoitem);
    this.props.history.push('/AddTask');
  }

  deleteTodo = todoitem => () => {
    this.props.featchDeleteToDoItem(todoitem);
  }

  render() {
    const { isLoading, todoList, classes } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography>
            {isLoading &&
              <CircularProgress />}
          </Typography>
          <Typography>
            <Paper className={classes.margin}>
              <Typography variant="h5">
                TO-DO:
                  </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={this.edit({})}>
                Add new ToDo      </Button>
            </Paper>
            <hr />
            <Paper>
              <List>
                {todoList.map(todoItem => (
                  <Paper className={classes.margin}>
                    <ListItem key={todoItem.id} dense button >
                      <ListItemText primary={`${todoItem.title}`}
                        onClick={this.edit(todoItem)}
                        className={todoItem.completed ? classes.strike : ''} />
                      <Button color="primary"
                        onClick={this.deleteTodo(todoItem)}
                        
                      >
                        X      </Button>
                      <ListItemSecondaryAction>
                        <Checkbox disabled={todoItem.completed}
                          onChange={this.complete(todoItem)}
                          checked={todoItem.completed}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
export default withStyles(styles)(Dashboard);