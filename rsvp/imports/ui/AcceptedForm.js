import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';
import Invitation from './Invitation';
import fragments from './fragments';

const CEREMONY_START_TIME = new Date('Sat Aug 25 2018 14:30:00 GMT-0400');
const ONE_DAY = 24 * 60 * 60 * 1000;

const daysLeft = () => {
  const diffMillis = Date.now() - CEREMONY_START_TIME.getTime();
  return Math.round(Math.abs((diffMillis) / (ONE_DAY)));
};

class AcceptedForm extends React.Component {
  constructor() {
    super();
    this.state = { isEditMode: false };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    const { isEditMode } = this.state;
    this.setState({ isEditMode: !isEditMode });
  }

  render() {
    const { undoResponse } = this.props;
    const { isEditMode } = this.state;

    const undoButton = <A onClick={undoResponse}>Undo</A>;

    const EditButton = props =>
      <A onClick={this.toggleEditMode}>{props.children || 'Edit'}</A>;
    const DoneEditingButton = props =>
      <A onClick={this.toggleEditMode}>{props.children || 'Done Editing'}</A>;

    const todo = () => console.log('TODO: Meteor.call for updating the database', arguments);
    const updateInvitation = todo;
    const addGuest = todo;
    const removeGuest = todo;
    const updateGuest = todo;

    return (
      <div className="post-response-form">
        {!isEditMode && (
          <div>
            <p>
              Your response is confirmed! 🎉<br />
              We think you just made a great decision. {undoButton}
            </p>

            <h2 className="cursive no-bottom-margin">Thank You! 😍</h2>
          </div>
        )}

        <Invitation {...this.props} {...{
          isEditMode,
          EditButton,
          DoneEditingButton,
          updateInvitation,
          addGuest,
          removeGuest,
          updateGuest
        }} />

        {!isEditMode && (
          <div>
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
        )}
      </div>
    );
  }
}

AcceptedForm.propTypes = {
  ...Invitation.propTypes,
  undoResponse: PropTypes.func,
};

export default AcceptedForm;