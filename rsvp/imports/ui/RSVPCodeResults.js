import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withTracker } from 'meteor/react-meteor-data';
import { Invitations } from '../api/invitations.js';

const RSVPCodeResults = props => {
  const { ready, luggage, matchingInvitation } = props;
  return (
    <React.Fragment>
      <div className={cx('code-footer', { visible: !ready })}>
        {!luggage ? (
          <p>
            <a className="no-code" href="#">Lost your code? Love filling out forms?</a>
          </p>
        ) : (
          <p className="luggage">Hey, that's the combination on my luggage!</p>
        )}
      </div>
      <div className={cx('no-such-code', { visible: ready && !matchingInvitation })}>
        <p className="luggage">Hey, you made that up. Stop it.</p>
      </div>
      <div className={cx('matching-invitation', { visible: ready && matchingInvitation })}>
        <p>{matchingInvitation && matchingInvitation.name}</p>
        <p style={{ maxWidth: '450px', margin: 'auto', paddingBottom: '15px' }}>
          Whoa there! You are early, and you're guessing codes? What's going on here??
        </p>
      </div>
    </React.Fragment>
  );
};

RSVPCodeResults.propTypes = {
  code: PropTypes.string,
  ready: PropTypes.bool, // see derivedState in RSVPApp, true if code.length === 4
  luggage: PropTypes.bool, // see derivedState in RSVPApp, true if code === '1234'
  matchingInvitation: PropTypes.object, // straight from mongoDB
};

export default withTracker(props => ({
  matchingInvitation: Invitations.findOne({
    rsvpCode: parseInt(props.code, 10)
  })
}))(RSVPCodeResults);
