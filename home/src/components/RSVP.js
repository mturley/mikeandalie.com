import React from 'react';

class RSVP extends React.Component {
  render() {
    return (
      <div
        className="fullscreen rsvp-container"
      >
        <h1>RSVP</h1>
        <p>
          You may notice that Mike got a little carried away and made a fancy RSVP code thing, against the advice of many of his peers.
        </p>
        <a href="/rsvp/" className="inline">
          <img src="img/rsvp-card.png" />
          <div>
            <p>
              Got your code?
            </p>
            <h2>Continue to the RSVP Form</h2>
          </div>
        </a>
        <p>
          If you can't find your code or don't want to use it, that's okay. You can use the form anyway.
        </p>
      </div>
    );
  }
}

export default RSVP;
