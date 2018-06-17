import React, { Component } from 'react';

export default class RSVPApp extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>RSVP</h1>
        </header>
        <div className="form-container">
          <div>
            <p>
              Please respond no later than July 25th.
            </p>
            <form>
              <p>Enter the 4-digit code on your RSVP card:</p>
              <h1 className="code">1234</h1>
            </form>
            <p>
              <small><a href="#">Lost your code? Like filling out forms?</a></small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}