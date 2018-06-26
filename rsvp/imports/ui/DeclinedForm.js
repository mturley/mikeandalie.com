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
      <h2 className="cursive">Thank You</h2>
      <h3>We're sorry to hear you can't make it!</h3>
      <p>
        If you need to change your response, you can return to this page at any time before the wedding.
      </p>
    </div>
  );
};

DeclinedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default DeclinedForm;