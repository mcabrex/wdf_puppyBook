'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer'
import { Provider } from 'react-redux';
import store from './store';
//hashHistory?
import {IndexRoute, Route ,Router, hashHistory} from 'react-router';
import {receivePuppies,loadPuppies} from './action-creators'


//onEnter replaces our componentDidMount(AllPuppies) & mapDispatchToProps(AllPuppiesContainer), here we use the store to directly dispatch our method(loadPuppies) from the actioncreators
//process from onEnter stepbystep?

ReactDOM.render(
  <Provider store={store}>
  <div className="container flexbox-container">
    <div className="jumbotron">
      <Router history={hashHistory}>
        <Route path="/">
          <Route path="puppies" component={AllPuppiesContainer} onEnter={store.dispatch(loadPuppies())}/>
          <IndexRoute component={AllPuppiesContainer}/>
        </Route>
      </Router>
    </div>
  </div>
  </Provider>,
  document.getElementById('app')
);