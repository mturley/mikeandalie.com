import React, { Component } from 'react';
import cx from 'classnames';

export default class RSVPApp extends Component {
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
    this._codeInput && this._codeInput.focus();
  }

  onCodeChange(event) {
    // Remove non-numeric characters and truncate at 4 digits
    const { target: { value } } = event;
    const code = value.replace(/\D/g, '').substring(0, 4);
    this.setState({ code });
  }

  render() {
    const { code, forceCodeFocus } = this.state;
    const { luggage, ready } = this.derivedState();
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
              <div class={cx('spinner', { visible: ready })}>
                <img src="img/spinner.png" />
              </div>
            </form>
          </div>
        </section>
        <section className="spacer" />
        <footer>
          <h4>
            Please respond no later than July 25th.
          </h4>
        </footer>
      </main>
    );
  }
}