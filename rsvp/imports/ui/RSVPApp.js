import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withTracker } from 'meteor/react-meteor-data';
import { Invitations } from '../api/invitations.js';

import RSVPCodeResults from './RSVPCodeResults';

const ENABLED = true;

class RSVPApp extends Component {
  constructor(props) {
    super(props);
    this.derivedState = this.derivedState.bind(this);
    this.onCodeBlur = this.onCodeBlur.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    this.undoResponse = this.undoResponse.bind(this);
    this.state = {
      code: props.code || ''
    };
  }

  componentDidMount() {
    this.onCodeBlur();
  }

  derivedState() {
    const { code } = this.state;
    const luggage = code === '1234';
    const codeEntered = code.length === 4;
    const ready = codeEntered && !luggage;
    return { ...this.state, codeEntered, luggage, ready };
  }

  onCodeBlur() {
    // Force the code input to remain focused when it's not full
    const { ready } = this.derivedState();
    if (!ready) {
      this._codeInput && this._codeInput.focus();
    }
  }

  onCodeChange(event) {
    // Remove non-numeric characters and truncate at 4 digits
    const { target: { value } } = event;
    const code = value.replace(/\D/g, '').substring(0, 4);
    this.setState({ code });
  }

  onAcceptClick(event, invitation) {
    event.preventDefault();
    FlowRouter.go(`/${invitation.rsvpCode}/accept`);
  }

  onDeclineClick(event, invitation) {
    event.preventDefault();
    FlowRouter.go(`/${invitation.rsvpCode}/decline`);
  }

  undoResponse(invitation) {
    FlowRouter.go(`/${invitation.rsvpCode}`); // This doesn't undo the database changes for us...
    // ...so we call the Meteor method used by the /accept and /decline routes. (see routes.js)
    Meteor.call('invitations.setResponse', {
      rsvpCode: invitation.rsvpCode,
      response: null
    });
  }

  render() {
    const { acceptedInvitations, response } = this.props;
    const { code, ready } = this.derivedState();

    if (ready) {
      this._codeInput && this._codeInput.blur();
    }

    const numConfirmedGuests = acceptedInvitations.reduce(
      (sum, invitation) => sum + invitation.numGuestsAccepted,
      0
    );

    const rsvpCodeInput = (
      <div className="code-container">
        <div className="code-form">
          <p className={cx('code-header', { visible: !ready })}>
            Enter&nbsp;the&nbsp;4-digit&nbsp;code
            found&nbsp;on&nbsp;your&nbsp;RSVP&nbsp;card:
          </p>
          <div className={cx('fancy-parentheses', { visible: !response })}>
            <input
              type="number"
              pattern="[0-9]*"
              inputMode="numeric"
              noValidate
              autoFocus
              className="code"
              value={code}
              onChange={this.onCodeChange}
              onBlur={this.onCodeBlur}
              ref={r => this._codeInput = r}
            />
          </div>
          <RSVPCodeResults
            {...this.props}
            {...this.derivedState()}
            onAcceptClick={this.onAcceptClick}
            onDeclineClick={this.onDeclineClick}
            undoResponse={this.undoResponse}
          />
        </div>
      </div>
    );

    return (
      <main>
        <header>
          <a className="back-home" href="/">
            <img src="img/back-arrow.svg" />
            <span>Mike &amp; Alie</span>
          </a>
          <h1>RSVP</h1>
          <h3>{numConfirmedGuests} confirmed guests</h3>
        </header>
        <section className="main-content">
          {ENABLED ? rsvpCodeInput : (
            <React.Fragment>
              <h2>Sorry... the RSVP form has been temporarily disabled!</h2>
              <p>Mike is working out a few last minute issues, and it will be working later today.</p>
              <p>Please contact Mike or Alie to RSVP, or wait for this page to come back.</p>
            </React.Fragment>
          )}
        </section>
        <section className="spacer" />
        <footer>
          <h4>Please respond by July 25th. ❤️</h4>
          <h5>Yes, <a href="https://github.com/mturley/mikeandalie.com">Mike made this</a> to show off. 👨‍💻</h5>
        </footer>
      </main>
    );
  }
}

RSVPApp.propTypes = {
  acceptedInvitations: PropTypes.arrayOf(PropTypes.object),
  code: PropTypes.string,
  lostCode: PropTypes.bool,
  response: PropTypes.oneOf([false, 'accept', 'decline'])
};

export default withTracker(() => ({
  acceptedInvitations: Invitations.find({ accepted: true }).fetch()
}))(RSVPApp);
