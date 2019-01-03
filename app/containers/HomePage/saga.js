/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ISEVEN, LOAD_SEQUENCER } from 'containers/App/constants';
import {  esEvenLoaded,
          isEvenLoadingError,
          sequencerLoaded,
          sequenceLoadingError
        } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername,
        makeSelectSequencer,
        makeSelectArguments,
      } from 'containers/HomePage/selectors';

/**
 * Github isevenResponse request/response handler
 */
export function* getisEvenResult() {
  // Select iseven from store
  const number = yield select(makeSelectUsername());
  const requestURL = `http://localhost:3000/is-even?number=${number}`;

  try {
    // Call our request helper (see 'utils/request')
    const isevenResponse = yield call(request, requestURL);
    yield put(esEvenLoaded(isevenResponse, iseven));
  } catch (err) {
    yield put(isEvenLoadingError(err));
  }
}

export function* getSequencerResult() {
  // Select iseven from store
  const sequencer = yield select(makeSelectSequencer());
  const funcArguments = yield select(makeSelectArguments());
  const requestURL = `http://localhost:3000/sequencer?function=${sequencer}&arguments=${funcArguments}`;

  try {
    // Call our request helper (see 'utils/request')
    const sequencerResponse = yield call(request, requestURL);
    yield put(sequencerLoaded(sequencerResponse, sequencer));
  } catch (err) {
    yield put(sequenceLoadingError(err));
  }
}


// Added by adrian to support multiples functions
export default function* rootSaga() {
  yield [
    takeLatest(LOAD_ISEVEN, getisEvenResult),
    takeLatest(LOAD_SEQUENCER, getSequencerResult)
  ];
}
