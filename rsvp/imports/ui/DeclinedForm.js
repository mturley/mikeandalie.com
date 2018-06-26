import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

const DeclinedForm = props => {
  const undo = <A onClick={props.undoResponse} />;
  return (
    <div>
      <p>
        You've declined. 😢 Are you sure? {undo}
      </p>
      <h2 className="cursive no-bottom-margin">Thank You!</h2>
      <h3 className="no-top-margin small-padding">We're sorry to hear you can't make it!</h3>
      <p className="extra-side-margins">
        If you want to change your response, you can return to this page at any time before July 25th.
      </p>
      <h3 className="emoji">
        📨
        <span className="envelope-hand">👌</span>
      </h3>
      <h3 className="no-top-margin small-padding">You're all set.</h3>
      <p className="end-of-rsvp">
        Please enjoy our photo gallery at <a href="/">mikeandalie.com</a>.<br />
        Just click on Memories! 📸
      </p>
      <p className="extra-bottom-margin extra-side-margins">
        <small>
          There will also be a collection of photos at mikeandalie.com/photos after the wedding.
        </small>
      </p>
      <p>We can't wait.</p>
      <p>
        <span className="cursive">Mike 💘 Alie</span>
      </p>
    </div>
  );
};

DeclinedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default DeclinedForm;