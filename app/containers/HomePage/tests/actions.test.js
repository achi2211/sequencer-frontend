import { CHANGE_USERNAME } from '../constants';

import { changeIsEven } from '../actions';

describe('Home Actions', () => {
  describe('changeIsEven', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_USERNAME,
        name: fixture
      };

      expect(changeIsEven(fixture)).toEqual(expectedResult);
    });
  });
});
