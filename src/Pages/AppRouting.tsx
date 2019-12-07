import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { IAppState } from '../store';

import Home from './Home';
import Favorite from './Favorite';
import CreateComment from './CreateComment';
import Navigation from '../components/Navigation';


interface IProps {
  store: Store<IAppState>;
}

class AppRouting extends Component<IProps> {
  render() {
    const {store} = this.props;
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