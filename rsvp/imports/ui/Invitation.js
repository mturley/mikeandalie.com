import React from 'react';
import PropTypes from 'prop-types';

import A from './PreventDefault';

const DEBUG_MODE = false;
// TODO put me in some react-helpers thing?
const json2jsx = json => JSON
  .stringify(json, null, 4)
  .split('\n').map((item, key) => (
    <span key={key}>{item}<br /></span>
  ));

const Invitation = props => {
  const {
    invitation,
    isEditMode,
    EditButton,
    DoneEditingButton,
    updateInvitation,
    addGuest,
    removeGuest,
    updateGuest
  } = props;

  const guests = invitation.guests || [];
  const plural = guests.length > 1;
  const noAllergies = invitation.guests.every(guest => !guest.hasAllergies);

  const toggleAllergies = () => {
    updateInvitation(); // TODO
  };

  const onGuestNameChange = (index, event) => {
    const { target: { value } } = event;
    updateGuest(index, { name: value });
  };

  const onGuestAllergyChange = (index, event) => {
    const { target: { value } } = event;
    updateGuest(index, { allergy: value });
  }

  const onCommentChange = event => {
    const { target: { value } } = event;
    console.log('TODO: save the real value', value);
    updateInvitation({ comment: value });
  };

  const RemoveGuestButton = buttonProps => (
    <A
      className="remove-button"
      onClick={() => removeGuest(buttonProps.guest)}
    >
      ❌
    </A>
  );

  return (
    <div className={`envelope ${isEditMode ? 'edit-mode' : ''}`}>
      <div className="closed">
        <div className="right"></div>
        <div className="left"></div>
        <div className="mid"></div>
        <div className="header">
          {!isEditMode ? (
            <h3>
              Please&nbsp;verify
              your&nbsp;information.
              <span><EditButton /></span>
            </h3>
          ) : (
            <h3>
              Please update your information.<br />
              <DoneEditingButton />
            </h3>
          )}
        </div>
      </div>
      <div className="body">
        <div className="guest-count">
          <p className="emoji">
            {guests.map(guest => (
              <React.Fragment key={guest.name}>
                🍽️
              </React.Fragment>
            ))}
          </p>
          <p className="number">
            {guests.length} guests
            {isEditMode && (
              <A className="add-guest" onClick={addGuest}>
                Add a Guest
              </A>
            )}
          </p>
        </div>
        <h4 className="no-bottom-margin">
          Your {!plural ? 'name' : 'names'}:
          <br />
          <small><strong>
            (as you would like {!plural ? 'it' : 'them'} to appear at your table)
          </strong></small>
        </h4>
        {guests.map((guest, index) => (
          <p key={guest.name}>
            {!isEditMode ? (
              <span className="cursive name">{guest.name}</span>
            ) : (
              <React.Fragment>
                <input
                  className="guest-name"
                  value={guest.name}
                  onChange={event => onGuestNameChange(index, event)}
                />
                <RemoveGuestButton guest={guest} />
              </React.Fragment>
            )}
            {!isEditMode ? (
              guest.allergies && (
                <h5>
                  Food allergy:
                  <strong>{guest.allergies}</strong>
                </h5>
              )
            ) : (
              (guest.allergies || guest.allergies === '') && (
                <h5 className="no-top-margin small-padding">
                  Food allergy:
                  <input
                    className="guest-allergy"
                    placeholder="Please specify"
                    value={guest.allergy}
                    onChange={event => onGuestAllergyChange(index, event)}
                  />
                </h5>
              )
            )}
          </p>
        ))}
      </div>
      {!isEditMode ? (
        <div className="allergies">
          {noAllergies && <h5>✅ No Food Allergies</h5>}
        </div>
      ) : (
        <div className="allergies">
          <h5>
            Check this box if anyone in your party has a food allergy:&nbsp;
            <input
              type="checkbox"
              className="food-allergies"
              value="food-allergies"
              checked={!noAllergies}
              onChange={toggleAllergies}
            />
          </h5>
        </div>
      )}
      {!isEditMode ? (
        <div className="comment-box">
          <h4 className="no-bottom-margin">
            Comments for guestbook:<br />
            {invitation.comment || <EditButton>Leave a Comment</EditButton>}
          </h4>
        </div>
      ) : (
        <div className="comment-box">
          <p className="small no-bottom-margin">
            Any comments you would like to share in our guestbook?<br />
            (optional, visible to other guests)
          </p>
          <textarea
            placeholder="Congratulations? Thoughtful Stories? Embarassing Stories?"
            onChange={onCommentChange}
          >
            {invitation.comment}
          </textarea>
        </div>
      )}
      {DEBUG_MODE && (
        <div style={{ opacity: 0.5, textAlign: 'left' }}>
          {json2jsx(invitation)}
        </div>
      )}
      <div className="footer">
        {!isEditMode ? (
          <p>
            Need to change something? <EditButton />
          </p>
        ) : (
          <p>
            <DoneEditingButton />
          </p>
        )}
      </div>
    </div>
  );
};

Invitation.propTypes = {
  invitation: PropTypes.shape({
    name: PropTypes.string,
    rsvpCode: PropTypes.number,
    numGuestsInvited: PropTypes.number,
    guests: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      glutenFree: PropTypes.bool,
      dairyFree: PropTypes.bool,
      other: PropTypes.string
    })),
    message: PropTypes.string
  }),
  isEditMode: PropTypes.bool,
  EditButton: PropTypes.func,
  DoneEditingButton: PropTypes.func,
  addGuest: PropTypes.func,
  updateGuest: PropTypes.func,
  removeGuest: PropTypes.func
};

export default Invitation;