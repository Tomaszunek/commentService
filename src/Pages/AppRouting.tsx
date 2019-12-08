import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './Home';
import Favorite from './Favorite';
import CreateComment from './CreateComment';
import Navigation from '../components/Navigation';
import { rootReducer } from '../store';

interface IProps {}

const store = createStore(rootReducer);


class AppRouting extends Component<IProps> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/favorite' component={Favorite}/>
              <Route path='/create' component={CreateComment}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default AppRouting;