/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_ISEVEN,
  LOAD_ISEVEN_SUCCESS,
  LOAD_ISEVEN_ERROR,
  LOAD_SEQUENCER,
  LOAD_SEQUENCER_SUCCESS,
  LOAD_SEQUENCER_ERROR
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ISEVEN
 */
export function loadIsEvenResponse() {
  return {
    type: LOAD_ISEVEN,
  };
}

export function loadSequencerResponse() {
  return {
    type: LOAD_SEQUENCER,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} isevenResponse The repository data
 * @param  {string} iseven The current iseven
 *
 * @return {object}      An action object with a type of LOAD_ISEVEN_SUCCESS passing the isevenResponse
 */
export function esEvenLoaded(isevenResponse, iseven) {
  return {
    type: LOAD_ISEVEN_SUCCESS,
    isevenResponse,
    iseven,
  };
}

export function sequencerLoaded(sequencerResponse, sequencer) {
  return {
    type: LOAD_SEQUENCER_SUCCESS,
    sequencerResponse,
    sequencer,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ISEVEN_ERROR passing the error
 */
export function isEvenLoadingError(error) {
  return {
    type: LOAD_ISEVEN_ERROR,
    error,
  };
}

export function sequenceLoadingError(error) {
  return {
    type: LOAD_SEQUENCER_ERROR,
    error,
  };
}
