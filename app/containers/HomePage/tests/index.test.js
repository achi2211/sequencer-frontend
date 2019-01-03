/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import ReposList from 'components/ReposList';
import HomePage from '../HomePage';
import { mapDispatchToProps } from '../index';
import { changeIsEven } from '../actions';
import { loadIsEvenResponse } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the isevenResponse list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} isevenResponse={[]} />
    );
    expect(
      renderedComponent.contains(<ReposList loading error={false} isevenResponse={[]} />)
    ).toEqual(true);
  });

  it('should render fetch the isevenResponse on mount if a iseven exists', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        iseven="Not Empty"
        onChangeIsEven={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if iseven is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeIsEven={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if iseven is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage
        iseven=""
        onChangeIsEven={() => {}}
        onSubmitForm={submitSpy}
      />
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeIsEven', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeIsEven).toBeDefined();
      });

      it('should dispatch changeIsEven when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const iseven = 'flexdinesh';
        result.onChangeIsEven({ target: { value: iseven } });
        expect(dispatch).toHaveBeenCalledWith(changeIsEven(iseven));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadIsEvenResponse when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadIsEvenResponse());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
