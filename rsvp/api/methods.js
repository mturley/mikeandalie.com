import { Invitations } from '../imports/api/invitations.js';

Meteor.methods({
  'invitations.setResponse'({ rsvpCode, response }) {
    Invitations.update(
      { rsvpCode: parseInt(rsvpCode, 10) },
      { $set: { response } }
    );
  }
});