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
              <h2>Form elements go in here</h2>
            </form>
          </div>
        </div>
      </div>
    );
  }
}