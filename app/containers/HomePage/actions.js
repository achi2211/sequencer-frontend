/*
 * Home Actions
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
  CHANGE_USERNAME,
  CHANGE_SEQUENCER,
  CHANGE_ARGUMENTS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeIsEven(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}

export function changeSequencer(sequencer) {
  return {
    type: CHANGE_SEQUENCER,
    sequencer
  };
}

export function changeArguments(funcArguments) {
  return {
    type: CHANGE_ARGUMENTS,
    arguments: funcArguments
  };
}
