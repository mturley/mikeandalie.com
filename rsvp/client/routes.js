import { Meteor } from 'meteor/meteor';

// Global state is a ReactiveDict because who needs redux amirite?
const setState = (key, val) => {
  const oldVal = globalState.get(key);
  const changed = oldVal !== val;
  const status = globalState ? (
    changed ? 'CHANGED' : 'NO CHANGE'
  ) : 'FAILED';
  const message = `globalState [${status}]: '${key}' <- `;
  if (!globalState) {
    // DEBUG CODE! yay for safety.
    console.warn(message);
  } else {
    console.log(message);
    if (changed) globalState.set(key, val);
    console.log(`  -> old value: ${oldVal === '' ? `''` : oldVal}, new value: ${val === '' ? `''` : val}`);
  }
};

FlowRouter.route('/', {
  name: 'RSVP.root',
  action() {
    setState('code', '');
    setState('lostCode', false);
    setState('response', false); // TODO you can probably just use the database instead of this.
  }
});

FlowRouter.route('/no-code', {
  name: 'RSVP.noCode',
  action() {
    setState('code', '');
    setState('lostCode', true);
    setState('response', false);
  }
});

FlowRouter.route('/no-code/accept', {
  name: 'RSVP.noCodeAccept',
  action() {
    setState('code', '');
    setState('lostCode', true);
    setState('response', 'accept');
    console.log('[TODO] your thing was not submitted, yell at mike');
    // TODO handle no-code submission
    /*
    Meteor.call('invitations.setResponse', {
      rsvpCode: invitation.rsvpCode,
      response: 'accept'
    });
    */
  }
});

FlowRouter.route('/no-code/decline', {
  name: 'RSVP.noCodeDecline',
  action() {
    setState('code', '');
    setState('lostCode', true);
    setState('response', 'decline');
    console.log('[TODO] your thing was not submitted, yell at mike');
    // TODO handle no-code submission
    /*
    Meteor.call('invitations.setResponse', {
      rsvpCode: invitation.rsvpCode,
      response: 'decline'
    });
    */
  }
});

// TODO no-code undo??? use session to remember the saved id.....??

FlowRouter.route('/:code', {
  name: 'RSVP.code',
  action({ code }) {
    setState('code', code);
    setState('lostCode', false);
    setState('response', null);
    // DO NOT reset the db to null on /:code !!
    // in case the guest uses the back button after submitting the form.
  }
});

FlowRouter.route('/:code/accept', {
  name: 'RSVP.codeAccept',
  action({ code }) {
    setState('code', code);
    setState('lostCode', false);
    setState('response', 'accept');
    Meteor.call('invitations.setResponse', {
      rsvpCode: code,
      response: 'accept'
    });
  }
});

FlowRouter.route('/:code/decline', {
  name: 'RSVP.codeDecline',
  action({ code }) {
    setState('code', code);
    setState('lostCode', false);
    setState('response', 'decline');
    Meteor.call('invitations.setResponse', {
      rsvpCode: code,
      response: 'decline'
    });
  }
});
