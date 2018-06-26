import React from 'react';

class RSVP extends React.Component {
  render() {
    return (
      <div
        className="fullscreen rsvp-container"
      >
        <h1>RSVP</h1>
        <p>
          Mike has created an optional 4-digit code for each of you to use instead of filling in your information.
        </p>
        <p>
          You need only submit an RSVP once for your whole party.
        </p>
        <a href="/rsvp/" className="inline">
          <img src="img/rsvp-card.png" />
          <div className="button">
            <h2>
              Respond Online Now <br />
              <span className="emoji">💌</span>
            </h2>
          </div>
        </a>
        <p><small>
          If you can't find your code or don't want to use it, that's okay.<br />
          It's not required; It's just for fun, convenience, and hubris. ❤️
        </small></p>
      </div>
    );
  }
}

export default RSVP;
