import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/dashboardContainer'
import AddTask from './components/addTaskContainer'

import store from "./store";

export default () =>
  (<Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/AddTask" component={AddTask} />
      </div>
    </Router>
  </Provider>);
