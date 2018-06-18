import React, { Component } from 'react';
import cx from 'classnames';

export default class RSVPApp extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      forceCodeFocus: true
    };
    this.focusCodeInput = this.focusCodeInput.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    this.focusCodeInput();
  }

  focusCodeInput() {
    this._codeInput && this._codeInput.focus();
  }

  onCodeChange(event) {
    const { target: { value } } = event;
    // Remove non-numeric characters and truncate at 4 digits
    const code = value.replace(/\D/g, '').substring(0, 4);
    this.setState({ code });
  }

  render() {
    const { code, forceCodeFocus } = this.state;
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
              <p>Enter the 4-digit code found on your RSVP card:</p>
              <input
                className="code"
                value={code}
                onChange={this.onCodeChange}
                onBlur={forceCodeFocus ? this.focusCodeInput : null}
                ref={r => this._codeInput = r}
              />
              <p>
                <a className="no-code" href="#">Lost your code? Love filling out forms?</a>
              </p>
            </form>
          </div>
          <div class={cx('spinner', { visible: code.length === 4 })}>
            <img src="img/spinner.png" />
          </div>
          {code === '1234' && (
            <h3>Hey, that's the combination on my luggage!</h3>
          )}
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