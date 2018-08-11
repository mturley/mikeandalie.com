import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withTracker } from 'meteor/react-meteor-data';
import { Invitations } from '../api/invitations.js';

import RSVPCodeResults from './RSVPCodeResults';
import FormBody from './FormBody';

import A from './PreventDefault';

const ENABLED = true;

class RSVPApp extends Component {
  constructor(props) {
    super(props);
    this.derivedState = this.derivedState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.onCodeBlur = this.onCodeBlur.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
    this.undoResponse = this.undoResponse.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
    this.state = {
      code: props.code || '',
      isEditMode: false
    };
  }

  componentDidMount() {
    this.onCodeBlur();
  }

  derivedState() {
    const { lostCode } = this.props;
    const { code } = this.state;
    const luggage = code === '1234';
    const codeEntered = code.length === 4;
    const ready = (codeEntered && !luggage) || lostCode;
    return { ...this.state, codeEntered, luggage, ready };
  }

  resetState() {
    this.setState({
      code: '',
      isEditMode: false
    });
    FlowRouter.go('/');
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

  accept(event, invitation) {
    event.preventDefault();
    const code = invitation ? invitation.rsvpCode : 'no-code';
    FlowRouter.go(`/${code}/accept`);
  }

  decline(event, invitation) {
    event.preventDefault();
    const code = invitation ? invitation.rsvpCode : 'no-code';
    FlowRouter.go(`/${code}/decline`);
  }

  undoResponse({ invitation }) {
    const code = invitation ? invitation.rsvpCode : 'no-code';
    FlowRouter.go(`/${code}`); // This doesn't undo the database changes for us...
    // ...so we call the Meteor method used by the /accept and /decline routes. (see routes.js)
    if (invitation) {
      Meteor.call('invitations.setResponse', {
        rsvpCode: code,
        response: null
      });
    }
  }

  setEditMode(isEditMode) {
    this.setState({ isEditMode });
  }

  render() {
    const { acceptedInvitations, response, lostCode } = this.props;
    const { code, ready, isEditMode } = this.derivedState();

    if (ready) {
      this._codeInput && this._codeInput.blur();
    }

    const numConfirmedGuests = acceptedInvitations.reduce(
      (sum, invitation) => sum + invitation.guests.length,
      0
    );

    const descendantProps = {
      ...this.props,
      ...this.derivedState(),
      db: {
        accept: this.accept,
        decline: this.decline,
        undoResponse: this.undoResponse,
        updateInvitation: ({ invitation, newInvitation }) =>
          Meteor.call(
            'invitations.update',
            { invitation, newInvitation }
          ),
        addGuest: ({ invitation }) =>
          Meteor.call(
            'invitations.guests.add',
            { invitation }
          ),
        updateGuest: ({ invitation, index, newGuest }) =>
          Meteor.call(
            'invitations.guests.update',
            { invitation, index, newGuest }
          ),
        removeGuest: ({ invitation, guest }) =>
          Meteor.call(
            'invitations.guests.remove',
            { invitation, guest }
          )
      },
      setEditMode: this.setEditMode
    };

    const rsvpCodeInput = (
      <div className="code-container">
        <div className={cx('code-form', { 'border': !isEditMode })}>
          <p className={cx('code-header', { visible: !ready })}>
            Enter&nbsp;the&nbsp;4-digit&nbsp;code
            found&nbsp;on&nbsp;your&nbsp;RSVP&nbsp;card:
          </p>
          <div className={cx('fancy-parentheses', { visible: !response && !lostCode })}>
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
          {lostCode && (
            <div>
              <p className="small">
                You can proceed without a code, but it will involve more typing!
              </p>
              <p>
                👈&nbsp;
                <A className="reset-state" onClick={this.resetState}>Found your RSVP Code?</A>
              </p>
            </div>
          )}
          <RSVPCodeResults {...descendantProps} />
          <FormBody {...descendantProps} />
        </div>
      </div>
    );

    return (
      <main>
        <header>
          <a className="back-home" href="/">
            <img src="/rsvp/img/back-arrow.svg" />
            <span>Mike &amp; Alie</span>
          </a>
          <h1>RSVP</h1>
          <h3>115 confirmed guests</h3>
        </header>
        <section className="main-content">
          <h2>The RSVP form is now closed.</h2>
          <p>
            If you need to update Mike &amp; Alie about your attendance,
            please email us at <a href="mailto:rsvp@mikeandalie.com">rsvp@mikeandalie.com</a>.
            <br /><br />
            If you would like to leave a note for the guestbook,
            feel free to email <a href="mailto:us@mikeandalie.com">us@mikeandalie.com</a>.
          </p>
          <h2>We hope to see you there! ❤️</h2>
        </section>
        <section className="spacer" />
        <footer>
          <h4>Please respond by July 25th. ❤️</h4>
          <h5>
            <a href="https://github.com/mturley/mikeandalie.com">Mike made this</a>&nbsp;
            to show off his skillz 👨‍💻 and because he <a target="_blank" href="https://www.bookmorebrides.com/weddingwire-vs-the-knot-advertising/">doesn't like other wedding websites</a>.
          </h5>
        </footer>
      </main>
    );
  }
}

// TODO maybe "Thank you for responding before July 25th!" at the footer when you're done?

RSVPApp.propTypes = {
  acceptedInvitations: PropTypes.arrayOf(PropTypes.object),
  code: PropTypes.string,
  lostCode: PropTypes.bool,
  response: PropTypes.oneOf([false, 'accept', 'decline'])
};

export default withTracker(() => ({
  acceptedInvitations: Invitations.find({ response: 'accept' }).fetch()
}))(RSVPApp);