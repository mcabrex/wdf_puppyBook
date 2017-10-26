import {
    createStore,
    applyMiddleware,
    combineReducers
  } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//so our reducer has access to the action-creators
import {RECEIVE_PUPPIES,receivePuppies} from './action-creators'

const initialState = { allPuppies: [] }

export default function reducer(state=initialState,action){
    switch(action.type){
        case RECEIVE_PUPPIES: 
            return Object.assign({},state,{
                allPuppies: action.receivedPuppies
            })
        default:
            return state
    }
}

