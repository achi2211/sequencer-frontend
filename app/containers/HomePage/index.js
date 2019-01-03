import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectIsEvenResponse,
  makeSelectSequencerResult,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadIsEvenResponse, loadSequencerResponse } from '../App/actions';
import { changeSequencer, changeArguments, changeIsEven} from './actions';
import {
  makeSelectUsername,
  makeSelectSequencer,
  makeSelectArguments,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeIsEven: (evt) => dispatch(changeIsEven(evt.target.value)),
  onChangeSequencer: (evt) => {
    dispatch(changeSequencer(evt.target.value))
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(changeArguments(''));

  },
  onClickNext: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadSequencerResponse());

  },
  onSubmitForm: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadIsEvenResponse());
  },

  onChangeArguments: (evt) => {
    dispatch(changeArguments(evt.target.value))
  },
});

const mapStateToProps = createStructuredSelector({
  isevenResponse: makeSelectIsEvenResponse(),
  sequencerResponse: makeSelectSequencerResult(),
  iseven: makeSelectUsername(),
  sequencer: makeSelectSequencer(),
  arguments: makeSelectArguments(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
