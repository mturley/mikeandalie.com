import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

const DeclinedForm = props => {
  const undo = <A onClick={props.undoResponse} />;
  return (
    <div>
      <p>
        Declined. 😢 {undo}
      </p>
      <h2>TODO: Add "are you sure" messaging here</h2>
    </div>
  );
};

DeclinedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default DeclinedForm;