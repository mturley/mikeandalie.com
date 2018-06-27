import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

import fragments from './fragments';

const DeclinedForm = props => {
  const undo = <A onClick={props.undoResponse}>Undo</A>;
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
      <fragments.AllSet />
      <fragments.EnjoyTheGallery />
      <p className="no-bottom-margin">
        <small>We can't wait.</small>
      </p>
      <fragments.MikeHeartAlie className="no-top-margin" />
    </div>
  );
};

DeclinedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default DeclinedForm;