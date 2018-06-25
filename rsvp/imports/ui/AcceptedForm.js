import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

const AcceptedForm = props => {
  const undo = <A onClick={props.undoResponse} />;
  return (
    <div>
      <p>
        Accepted! 😍 {undo}
      </p>
    </div>
  );
};

AcceptedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default AcceptedForm;