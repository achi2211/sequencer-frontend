import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadIsEvenResponse,
  esEvenLoaded,
  isEvenLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      isEvenData: fromJS({
        repositories: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadIsEvenResponse action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('isEvenData', false);

    expect(appReducer(state, loadIsEvenResponse())).toEqual(expectedResult);
  });

  it('should handle the esEvenLoaded action correctly', () => {
    const fixture = [{
      name: 'My Repo',
    }];
    const iseven = 'test';
    const expectedResult = state
      .set('isEvenData', fixture)
      .set('loading', false)
      .set('currentUser', iseven);

    expect(appReducer(state, esEvenLoaded(fixture, iseven))).toEqual(expectedResult);
  });

  it('should handle the isEvenLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, isEvenLoadingError(fixture))).toEqual(expectedResult);
  });
});
