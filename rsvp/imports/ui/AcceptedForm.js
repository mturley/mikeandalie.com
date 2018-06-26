import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';
import Envelope from './Envelope';
import fragments from './fragments';

const CEREMONY_START_TIME = new Date('Sat Aug 25 2018 14:30:00 GMT-0400');
const ONE_DAY = 24 * 60 * 60 * 1000;

const daysLeft = () => {
  const diffMillis = Date.now() - CEREMONY_START_TIME.getTime();
  return Math.round(Math.abs((diffMillis) / (ONE_DAY)));
};

const AcceptedForm = props => {
  const { editMode } = props;
  const undo = <A onClick={props.undoResponse}>Undo</A>;
  const edit = <A onClick={props.editDetails}>Edit</A>;

  return (
    <div className="post-response-form">
      <p>
        Your response is confirmed! 🎉<br />
        We think you just made a great decision. {undo}
      </p>
      <h2 className="cursive no-bottom-margin">Thank You! 😍</h2>
      <Envelope open={editMode} edit={edit} />
      <fragments.AllSet className="no-bottom-margin" />
      <h3 className="no-top-margin">
        See you in <a href="/" className="no-underline">
          {daysLeft()} days! 🗓️
        </a>
      </h3>
      <p className="extra-side-margins">
        If you need to change your information, you can return to this page at any time before July 25th.
      </p>
      <fragments.EnjoyTheGallery />
      <p className="no-bottom-margin">
        <small>We can't wait. See you there!</small>
      </p>
      <fragments.MikeHeartAlie className="no-top-margin" />
    </div>
  );
};

AcceptedForm.propTypes = {
  undoResponse: PropTypes.func,
  editMode: PropTypes.bool
};

export default AcceptedForm;