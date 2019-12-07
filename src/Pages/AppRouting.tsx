import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Favorite from './Favorite';
import CreateComment from './CreateComment';
import Navigation from '../components/Navigation';

class AppRouting extends Component {
  render() {
    return (
    <Router>
        <div>
          <Navigation/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/create' component={CreateComment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouting;