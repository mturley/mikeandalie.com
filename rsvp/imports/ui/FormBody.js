import React from 'react';
import PropTypes from 'prop-types';

import { withTracker } from 'meteor/react-meteor-data';
import { Invitations } from '../api/invitations.js';

import AcceptedForm from './AcceptedForm';
import DeclinedForm from './DeclinedForm';

const FormBody = props => {
  const { ready, invitation, response, db } = props;
  const formProps = {
    ...props,
    invitation,
    undoResponse: () => db.undoResponse(invitation)
  };
  return (ready && invitation && response) ? (
    response === 'accept'
      ? <AcceptedForm {...formProps} />
      : <DeclinedForm {...formProps} />
  ) : null;
};

FormBody.propTypes = {
  ...AcceptedForm.propTypes,
  invitation: PropTypes.object
};

export default withTracker(props => ({
  invitation: Invitations.findOne({
    rsvpCode: parseInt(props.code, 10)
  })
}))(FormBody);
