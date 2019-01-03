/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('iseven')
);

const makeSelectSequencer = () => createSelector(
  selectHome,
  (homeState) => homeState.get('sequencer')
);

const makeSelectArguments = () => createSelector(
  selectHome,
  (homeState) => homeState.get('arguments')
);


export {
  selectHome,
  makeSelectUsername,
  makeSelectSequencer,
  makeSelectArguments,
};
