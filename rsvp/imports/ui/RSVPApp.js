import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTracker } from 'meteor/react-meteor-data';

import { Invitations } from '../api/invitations.js';

class RSVPApp extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      forceCodeFocus: true
    };
    this.derivedState = this.derivedState.bind(this);
    this.focusCodeInput = this.focusCodeInput.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    this.focusCodeInput();
  }

  derivedState() {
    const { code } = this.state;
    const luggage = code === '1234';
    const codeEntered = code.length === 4;
    const ready = codeEntered && !luggage;
    return { codeEntered, luggage, ready };
  }

  focusCodeInput() {
    //this._codeInput && this._codeInput.focus();
  }

  onCodeChange(event) {
    // Remove non-numeric characters and truncate at 4 digits
    const { target: { value } } = event;
    const code = value.replace(/\D/g, '').substring(0, 4);
    this.setState({ code });
  }

  handleNewInvitation(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Invitations.insert({
      name: text
    });
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    const { code, forceCodeFocus } = this.state;
    const { luggage, ready } = this.derivedState();
    console.log('RENDER! DATA:', this.props.acceptedInvitations);
    return (
      <main>
        <header>
          <a className="back-home" href="/">
            <img src="img/back-arrow.svg" />
            <span>Mike &amp; Alie</span>
          </a>
          <h1>RSVP</h1>
          <h3>0 confirmed guests</h3>
        </header>
        <section className="main-content">
          <div className="code-container">
            <form>
              <p className={cx('code-header', { visible: !ready })}>
                Enter&nbsp;the&nbsp;4-digit&nbsp;code
                found&nbsp;on&nbsp;your&nbsp;RSVP&nbsp;card:
              </p>
              <div className="fancy-parentheses">
                {/* TODO force the numeric keypad on mobile, see notes */}
                <input
                  className="code"
                  value={code}
                  onChange={this.onCodeChange}
                  onBlur={forceCodeFocus ? this.focusCodeInput : null}
                  ref={r => this._codeInput = r}
                />
              </div>
              <div className={cx('code-footer', { visible: !ready })}>
                {!luggage ? (
                  <p>
                    <a className="no-code" href="#">Lost your code? Love filling out forms?</a>
                  </p>
                ) : (
                  <p className="luggage">Hey, that's the combination on my luggage!</p>
                )}
              </div>
              <div className={cx('spinner', { visible: ready })}>
                <img src="img/spinner.png" />
              </div>
            </form>
          </div>
        </section>
        <section className="spacer" />
        <footer>
          <h4>Please respond no later than July 25th.</h4>
          <h5>Yes, <a href="https://github.com/mturley/mikeandalie.com">Mike made this</a> to show off.</h5>
        </footer>
        <form className="new-invitation" onSubmit={this.handleNewInvitation.bind(this)}>
              <input type="text" ref="textInput" placeholder="type here" />
        </form>
      </main>
    );
  }
}

RSVPApp.propTypes = {
  acceptedInvitations: PropTypes.arrayOf(PropTypes.object)
};

export default withTracker(() => ({
  acceptedInvitations: Invitations.find({
    //attending: { $eq: true }
  }).fetch()
}))(RSVPApp);
