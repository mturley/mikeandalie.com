import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

import fragments from './fragments';
import { removeAllListeners } from 'cluster';

const CEREMONY_START_TIME = new Date('Sat Aug 25 2018 14:30:00 GMT-0400');
const ONE_DAY = 24 * 60 * 60 * 1000;

const Null = () => null;

const daysLeft = () => {
  const diffMillis = Date.now() - CEREMONY_START_TIME.getTime();
  return Math.round(Math.abs((diffMillis) / (ONE_DAY)));
};

const AcceptedForm = props => {
  const { editMode } = props;
  const undo = <A onClick={props.undoResponse}>Undo</A>;
  const edit = <A onClick={props.editDetails}>Edit</A>;

  const checklistReadMode = (
    <div className="guest-checklist read-mode">
      <Null>
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
      </Null>
    </div>
  );

  const checklistEditMode = (
    <div className="info-checklist write-mode">

    </div>
  );

  return (
    <div className="post-response-form">
      <p>
        You've Accepted! 🎉<br />
        We think you just made a great decision. {undo}
      </p>
      <h2 className="cursive no-bottom-margin">Thank You! 😍</h2>
      <h3 className="no-top-margin no-bottom-margin">Your response is confirmed.</h3>
      <h4 className="no-top-margin small-padding">Please verify your information below:</h4>
      {editMode ? checklistEditMode : checklistReadMode}
      <p>
        Need to change something? {edit}
      </p>
      <fragments.AllSet className="no-bottom-margin" />
      <h3 className="no-top-margin">
        We can't wait. See you in <a href="/" className="no-underline">
          {daysLeft()} days! 🗓️
        </a>
      </h3>
      <p className="extra-side-margins">
        If you need to change your information, you can return to this page at any time before July 25th.
      </p>
      <fragments.EnjoyTheGallery />
      <fragments.MikeHeartAlie />
    </div>
  );
};

AcceptedForm.propTypes = {
  undoResponse: PropTypes.func,
  editMode: PropTypes.bool
};

export default AcceptedForm;