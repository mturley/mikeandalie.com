import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

const AcceptedForm = props => {
  const undo = <A onClick={props.undoResponse} />;
  return (
    <div className="post-response-form">
      <p>
        You've Accepted! 🎉<br />
        We think you just made a great decision. {undo}
      </p>
      <h2 className="cursive">Thank You! 😍</h2>
      <ul>
        <li>
          2 Guests:
          <ol>
            <li>Mike Turley (Food Allergy: Gluten)</li>
            <li>Alie Gillespie</li>
          </ol>
        </li>
        <li>No Food allergies (?)</li>
      </ul>
      <p>
        Does this information look correct?
        [Yes / No]
      </p>
      <h3>We can't wait for you to join us.</h3>
    </div>
  );
};

AcceptedForm.propTypes = {
  undoResponse: PropTypes.func
};

export default AcceptedForm;