import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
  import createLogger from 'redux-logger';
  import thunkMiddleware from 'redux-thunk';
  import { composeWithDevTools } from 'redux-devtools-extension';
  import reducer from './reducer'

//createStore takes a reducer as a first argument
//createStore CAN take a second argument: middleware!
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      createLogger()
    ))
  );

export default store;