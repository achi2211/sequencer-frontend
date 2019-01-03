import {
  LOAD_ISEVEN,
  LOAD_ISEVEN_SUCCESS,
  LOAD_ISEVEN_ERROR,
} from '../constants';

import {
  loadIsEvenResponse,
  esEvenLoaded,
  isEvenLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadIsEvenResponse', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_ISEVEN,
      };

      expect(loadIsEvenResponse()).toEqual(expectedResult);
    });
  });

  describe('esEvenLoaded', () => {
    it('should return the correct type and the passed isevenResponse', () => {
      const fixture = ['Test'];
      const iseven = 'test';
      const expectedResult = {
        type: LOAD_ISEVEN_SUCCESS,
        isevenResponse: fixture,
        iseven,
      };

      expect(esEvenLoaded(fixture, iseven)).toEqual(expectedResult);
    });
  });

  describe('isEvenLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_ISEVEN_ERROR,
        error: fixture,
      };

      expect(isEvenLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
