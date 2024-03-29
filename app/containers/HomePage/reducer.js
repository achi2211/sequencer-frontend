/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { CHANGE_USERNAME, CHANGE_SEQUENCER, CHANGE_ARGUMENTS } from './constants';

// The initial state of the App
const initialState = fromJS({
  iseven: ''
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('iseven', action.name);
    case CHANGE_SEQUENCER:
      return state.set('sequencer', action.sequencer);
    case CHANGE_ARGUMENTS:
      return state.set('arguments', action.arguments);
    default:
      return state;
  }
}

export default homeReducer;
