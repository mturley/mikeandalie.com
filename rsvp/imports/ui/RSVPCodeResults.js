import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withTracker } from 'meteor/react-meteor-data';
import { Invitations } from '../api/invitations.js';

const RSVPCodeResults = props => {
  const {
    ready,
    luggage,
    matchingInvitation,
    response
  } = props;
  const onAcceptClick = event => props.onAcceptClick(event, matchingInvitation);
  const onDeclineClick = event => props.onDeclineClick(event, matchingInvitation);
  const onUndoResponseClick = event => props.onUndoResponseClick(event, matchingInvitation);
  const responseStr = response === 'accept'
    ? 'Accepted! 😍'
    : response === 'decline'
      ? 'Declined. 😢'
      : '';
  return (
    <React.Fragment>
      <div className={cx('code-footer', { visible: !ready })}>
        {!luggage ? (
          <p>
            <a className="no-code" href="/no-code">Lost your code? Love filling out forms?</a>
          </p>
        ) : (
          <p className="luggage">Hey, that's the combination on my luggage!</p>
        )}
      </div>
      <div className={cx('no-such-code', { visible: ready && !matchingInvitation })}>
        <p className="luggage">Are you just <em>guessing numbers?</em> <big>🤨</big>
        &nbsp;&nbsp;
        <small>or&nbsp;did&nbsp;you&nbsp;make&nbsp;a&nbsp;typo?&nbsp;🤔</small></p>
      </div>
      <div className={cx('matching-invitation', {
        visible: ready && matchingInvitation && !response
      })}>
        <p>{matchingInvitation && matchingInvitation.name}</p>
        <div className="yes-no-buttons">
          <button className="yes" onClick={onAcceptClick}>
            Accept with pleasure<br />
            <span className="emoji">😍</span>
          </button>
          <button className="no" onClick={onDeclineClick}>
            Decline with regret<br />
            <span className="emoji">😢</span>
          </button>
        </div>
      </div>
      {ready && matchingInvitation && response && (
        <div>
          <p>
            {responseStr}
            &nbsp;&nbsp;
            <a onClick={onUndoResponseClick} href="#">
              Undo
            </a>  
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

RSVPCodeResults.propTypes = {
  code: PropTypes.string,
  ready: PropTypes.bool, // see derivedState in RSVPApp, true if code.length === 4
  luggage: PropTypes.bool, // see derivedState in RSVPApp, true if code === '1234'
  matchingInvitation: PropTypes.object, // straight from mongoDB
  onAcceptClick: PropTypes.func,
  onDeclineClick: PropTypes.func,
  onUndoResponseClick: PropTypes.func,
  response: PropTypes.oneOf([false, 'accept', 'decline']),
};

export default withTracker(props => ({
  matchingInvitation: Invitations.findOne({
    rsvpCode: parseInt(props.code, 10)
  })
}))(RSVPCodeResults);
