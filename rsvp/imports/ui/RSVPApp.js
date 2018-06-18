import React, { Component } from 'react';

export default class RSVPApp extends Component {
  constructor() {
    super();
    this.state = {
      code: ''
    };
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(event) {
    const { target: { value } } = event;
    this.setState({ code: value.substring(0, 4) });
  }

  render() {
    const { code } = this.state;
    return (
      <main>
        <header>
          <h1>RSVP</h1>
          <h3>0 confirmed guests</h3>
        </header>
        <section className="form-container">
          <form>
            <p>Enter the 4-digit code found on your RSVP card:</p>
            <input className="code" value={code} onChange={this.onCodeChange} />
            <p>
              <a className="no-code" href="#">Lost your code? Love filling out forms?</a>
            </p>
          </form>
        </section>
        <footer>
          <h4>
            Please respond no later than July 25th.
          </h4>
        </footer>
      </main>
    );
  }
}