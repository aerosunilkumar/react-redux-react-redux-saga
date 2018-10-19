import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class AddTask extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    completed: PropTypes.bool,
    addOrUpdateError: PropTypes.any,
    isLoading: PropTypes.bool,
    featchAddToDoItem: PropTypes.func.isRequired,
    featchUpdateToDoItem: PropTypes.func.isRequired,
    featchCompleteToDoItem: PropTypes.func.isRequired,
    featchDeleteToDoItem: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({
      title: title,
      description: description
    })
  }
  state = {
    id: 0,
    title: "",
    description: ""
  }

  backToTasks = () => {
    this.props.history.push('/')
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  deleteTodo = () => {
    const { id, featchDeleteToDoItem } = this.props;
    featchDeleteToDoItem({
      id,
      "title": this.state.title,
      "description": this.state.description,
      "completed": false
    });
    this.backToTasks();
  }
  completeTodo = () => {
    const { id, featchCompleteToDoItem } = this.props;
    featchCompleteToDoItem({
      id,
      "title": this.state.title,
      "description": this.state.description,
      "completed": true
    })
    this.backToTasks();
  }

  saveTodo = () => {
    const { id, featchAddToDoItem, featchUpdateToDoItem } = this.props;
    if (id === 0 || id === undefined) {
      featchAddToDoItem({
        id,
        "title": this.state.title,
        "description": this.state.description,
        "completed": false
      })
    }
    else {
      featchUpdateToDoItem({
        id,
        "title": this.state.title,
        "description": this.state.description,
        "completed": false
      })
    }
    this.backToTasks();
  }

  render() {
    const { id, completed } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography>
            <CardContent>
                <Button variant="contained" onClick={this.backToTasks}>
                  Back to Tasks
                </Button>
            </CardContent>
            <CardContent>
              <Typography>
                <TextField
                  id="standard-name"
                  label="Title"
                  value={this.state.title}
                  placeholder="Todo Title"
                  onChange={this.handleChange('title')}
                  margin="normal"
                />
                <Button variant="contained" onClick={this.completeTodo} disabled={completed || id === 0 || id === undefined}>
                  completed
                </Button>
              </Typography>
            </CardContent>
            <br />
            <CardContent>
              <Typography>
                <TextField
                  id="standard-name"
                  label="Description"
                  placeholder="Todo Description"
                  multiline
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  margin="normal"
                />
              </Typography>
            </CardContent>
          </Typography>
          <br />
          <CardContent>
            <Typography>
              <Button variant="contained" color="primary" onClick={this.saveTodo} disabled={completed || this.state.title === "" || this.state.title=== undefined}>
                Save
              </Button>
              <Button variant="contained" disabled={completed} onClick={this.backToTasks}>
                Cancel
              </Button>
              <Button variant="contained" color="secondary" onClick={this.deleteTodo} disabled={completed || id === 0 || id === undefined}>
                Delete
                </Button>
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    );
  }
}

export default AddTask