import React from 'react';

class RSVP extends React.Component {
  render() {
    return (
      <div
        className="fullscreen rsvp-container"
        ref={r => this._rsvpContainer = r}
      >
        <h1>RSVP</h1>
        <p>An RSVP form will appear here soon.</p>
        <p>For now, you may RSVP by contacting Mike or Alie.</p>
      </div>
    );
  }
}

export default RSVP;
