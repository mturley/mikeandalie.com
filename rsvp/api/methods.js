import { Invitations } from '../imports/api/invitations.js';

Meteor.methods({
  'invitations.setResponse'({ rsvpCode, response }) {
    const responseTime = new Date().toISOString();
    Invitations.update(
      { rsvpCode: parseInt(rsvpCode, 10) },
      { $set: { response, responseTime } }
    );
  },

  'invitations.update'({ invitation, newInvitation }) {
    Invitations.update(
      { _id: invitation._id },
      { $set: { ...newInvitation } }
    );
  },
  
  'invitations.guests.add'({ invitation }) {
    Invitations.update(
      { _id: invitation._id },
      { $push: { guests: { name: '', allergy: null } } }
    );
  },

  'invitations.guests.update'({ invitation, index, newGuest }) {
    const updatedGuest = { ...invitation.guests[index], ...newGuest };
    const updatedGuests = invitation.guests.map((guest, i) => {
      if (i === index) return updatedGuest;
      return guest;
    });
    Invitations.update(
      { _id: invitation._id },
      { $set: { guests: updatedGuests } }
    );
  },

  'invitations.guests.remove'({ invitation, guest }) {
    const filteredGuests = invitation.guests.filter(g => g.name !== guest.name);
    Invitations.update(
      { _id: invitation._id, },
      { $set: { guests: filteredGuests } }
    );
  },
});