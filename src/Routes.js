import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';


export default class Routes extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:verticalid" component={Home} />
            <Route exact path="/courses/:categoryid" component={Home} />
          </div>
        </Router>
    )
  }
}
