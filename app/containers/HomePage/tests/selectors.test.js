import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectUsername,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      isEvenData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the iseven', () => {
    const iseven = 'flexdinesh';
    const mockedState = fromJS({
      home: {
        iseven,
      },
    });
    expect(usernameSelector(mockedState)).toEqual(iseven);
  });
});
