import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import Home from './Home';
import Favorite from './Favorite';
import CreateComment from './CreateComment';
import Navigation from '../components/Navigation';

const store = configureStore();

class AppRouting extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/favorite' component={Favorite} />
              <Route path='/create' component={CreateComment} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouting;