/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { error, isevenResponse, sequencerResponse } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Sequencer Project</h2>
          </section>
          <section>
            {error && <span className="error">Something went wrong, please try again</span>}
          </section>
          <section>
              <label htmlFor="sequencer">
                Sequencer :
              </label>
                <select
                  className="sequencer-dropdown"
                  id="sequencer"
                  onChange={this.props.onChangeSequencer}
                  value={this.props.sequencer}
                >
                  <option value="select">Select...</option>
                  <option value="fibonacci">Fibonacci</option>
                  <option value="factorial">Factorial</option>
                  <option value="prime">Prime</option>
                  <option value="range">Range</option>
                  <option value="partialSum">Partial Sum</option>
                </select>
                <Link
                  onClick={this.props.onClickNext}
                  className="next-link"
                  to="#"
                >
                  Next
                </Link>
                { (this.props.sequencer === 'range' || (this.props.sequencer === 'partialSum')) &&
                  <div>
                    <label htmlFor="arguments">
                      Arguments :
                    </label>
                    <input
                      id="arguments"
                      type="text"
                      placeholder={this.props.sequencer === 'range'? '(start,step) ex: 1,2' : 'ex: 1, 3, 7, 2, 0'}
                      value={this.props.arguments}
                      onChange={this.props.onChangeArguments}
                    />
                  </div>
                }
                <p>Last Result:</p>
                <span> { typeof sequencerResponse.value !== "undefined" ? sequencerResponse.value : '-' }  </span>
          </section>
          <section>
            <h2>Is Even ?</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="iseven">
                Number :
              </label>
                <input
                  id="iseven"
                  type="text"
                  placeholder="up to 0"
                  value={this.props.iseven}
                  onChange={this.props.onChangeIsEven}
                />
              <br></br>
              <small>Enter a number and press enter</small>
            </form>
            <span> { typeof isevenResponse.value !== "undefined" ? isevenResponse.value : '-' }  </span>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  isevenResponse: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  onSubmitSequencerForm: PropTypes.func,
  iseven: PropTypes.string,
  arguments: PropTypes.string,
  sequencer: PropTypes.string,
  onChangeIsEven: PropTypes.func,
  onChangeSequencer: PropTypes.func,
  onChangeArguments: PropTypes.func,
  onClickNext: PropTypes.func,
};
