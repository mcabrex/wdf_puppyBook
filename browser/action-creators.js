//exporting so we can import in our reducer through:
//  import {RECEIVE_PUPPIES,receivePuppies} from './action-creators'
import axios from 'axios'

export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = function (puppies) {
  return {
    type: RECEIVE_PUPPIES,
    receivedPuppies: puppies
  };
};

export const loadPuppies = function () {
    return function (dispatch) {
      axios.get('/api/puppies')
      .then(function (res) {
        return res.data;
      })
      .then(function (puppies) {
        const action = receivePuppies(puppies);
        dispatch(action);
      })
      .catch(function (err) {
        console.error(err)
      });
    };
  };
  