import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeIsEven } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      iseven: ''
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeIsEven action correctly', () => {
    const fixture = 'flexdinesh';
    const expectedResult = state.set('iseven', fixture);

    expect(homeReducer(state, changeIsEven(fixture))).toEqual(expectedResult);
  });
});
