/*
 * AppReducer
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

import {
  LOAD_ISEVEN_SUCCESS,
  LOAD_ISEVEN,
  LOAD_ISEVEN_ERROR,
  LOAD_SEQUENCER,
  LOAD_SEQUENCER_SUCCESS,
  LOAD_SEQUENCER_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  isEvenData: {
    repositories: false,
  },
  sequencerResponse : false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ISEVEN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('isEvenData', false);
    case LOAD_ISEVEN_SUCCESS:
      return state
        .set('isEvenData', action.isevenResponse)
        .set('loading', false)
        .set('currentUser', action.iseven);
    case LOAD_ISEVEN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_SEQUENCER:
        return state
          .set('loading', true)
          .set('error', false)
          .set('sequencerResponse', false);
    case LOAD_SEQUENCER_SUCCESS:
      return state
        .set('sequencerResponse', action.sequencerResponse)
        .set('loading', false)
        .set('currentUser', action.iseven);
    case LOAD_SEQUENCER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
