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
    setEditMode,
    EditButton,
    DoneEditingButton,
    db
  } = props;

  const guests = invitation && invitation.guests || [];
  const plural = guests.length !== 1;

  const nil = prop => prop === undefined || prop === null;
  const allergiesOff = invitation.guests.every(guest => nil(guest.allergy));
  const allergiesFalsy = invitation.guests.every(guest => !guest.allergy);

  const onAddGuestClick = () => {
    db.addGuest({ invitation });
  };

  const onNameClick = () => setEditMode(true);

  const onGuestNameChange = (index, event) => {
    const { target: { value } } = event;
    db.updateGuest({
      invitation,
      index,
      newGuest: { name: value }
    });
  };

  const onGuestAllergyChange = (index, event) => {
    const { target: { value } } = event;
    db.updateGuest({
      invitation,
      index,
      newGuest: { allergy: value }
    });
  }

  const toggleAllergies = () => {
    db.updateInvitation({
      invitation,
      newInvitation: {
        guests: invitation.guests.map(guest => ({
          ...guest,
          allergy: allergiesOff ? '' : null
        }))
      }
    });
  };

  const editAllergies = () => {
    // Only visible when allergies are empty, so we can just toggle.
    toggleAllergies();
    setEditMode(true);
  };

  const onCommentChange = event => {
    const { target: { value } } = event;
    db.updateInvitation({
      invitation,
      newInvitation: { comment: value }
    });
  };

  const RemoveGuestButton = buttonProps => (
    <A
      className="remove-button"
      onClick={() => {
        const { name } = buttonProps.guest
        if(!name || confirm(`Are you sure you want to remove ${name} from your invitation?`)) {
          db.removeGuest({
            invitation,
            guest: buttonProps.guest
          })
        }
      }}
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
            {guests.map((guest, index) => (
              <span key={index}>
                🍽️
              </span>
            ))}
          </p>
          <p className="number">
            {guests.length}&nbsp;
            {plural ? 'guests' : 'guest'}
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
          <div className="guest-name-plate" key={index}>
            {!isEditMode ? (
              <A className="cursive name" onClick={onNameClick}>
                {guest.name || '( blank )'}
              </A>
            ) : (
              <React.Fragment>
                <input
                  className="guest-name"
                  value={guest.name || ''}
                  placeholder="Guest Name"
                  onChange={event => onGuestNameChange(index, event)}
                />
                <RemoveGuestButton guest={guest} />
              </React.Fragment>
            )}
            {!isEditMode ? (
              guest.allergy && (
                <h5 className="allergy no-top-margin small-padding">
                  Food allergy:
                  <strong>{guest.allergy}</strong>
                </h5>
              )
            ) : (
              (guest.allergy || guest.allergy === '') && (
                <h5 className="no-top-margin small-padding">
                  Food allergy:
                  <input
                    className="guest-allergy"
                    placeholder="Please specify"
                    value={guest.allergy || ''}
                    onChange={event => onGuestAllergyChange(index, event)}
                  />
                </h5>
              )
            )}
          </div>
        ))}
        {isEditMode && (
          <p class="small">
            +&nbsp;
            <A className="add-guest" onClick={onAddGuestClick}>
              Add a Guest
            </A>
          </p>
        )}
      </div>
      {!isEditMode ? (
        <div className="allergies">
          {allergiesFalsy && (
            <h5>
              Food Allergies:&nbsp;
              <A onClick={editAllergies}>None</A>
            </h5>
          )}
        </div>
      ) : (
        <div className="allergies">
          <h5>
            Does anyone in your party have a food allergy?&nbsp;
            <input
              type="checkbox"
              className="food-allergies"
              value="food-allergies"
              checked={!allergiesOff}
              onChange={toggleAllergies}
            />
          </h5>
        </div>
      )}
      {!isEditMode ? (
        <div className="comment-box">
          <h4 className="no-bottom-margin">
            <small>Comments for guestbook:</small><br />
            {invitation.comment || <EditButton>Leave a Comment</EditButton>}
          </h4>
        </div>
      ) : (
        <div className="comment-box">
          <p className="small no-bottom-margin extra-side-margins">
            Any comments you would like to share in our guestbook?<br />
            (optional, visible to other guests)
          </p>
          <textarea
            placeholder="Congratulations? Thoughtful Stories? Embarassing Stories?"
            onChange={onCommentChange}
            value={invitation.comment}
          />
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
            Need to change something? <EditButton>Edit&nbsp;Details</EditButton>
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
      allergy: PropTypes.string
    })),
    comment: PropTypes.string
  }),
  isEditMode: PropTypes.bool,
  setEditMode: PropTypes.func,
  EditButton: PropTypes.func,
  DoneEditingButton: PropTypes.func,
  db: PropTypes.shape({
    addGuest: PropTypes.func,
    updateGuest: PropTypes.func,
    removeGuest: PropTypes.func
  })
};

export default Invitation;