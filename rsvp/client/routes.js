import { Meteor } from 'meteor/meteor';

FlowRouter.route('/', {
  name: 'RSVP.root',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', false);
    globalState.set('response', false); // TODO you can probably just use the database instead of this.
  }
});

FlowRouter.route('/no-code', {
  name: 'RSVP.noCode',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', false);
  }
});

FlowRouter.route('/no-code/accept', {
  name: 'RSVP.noCodeAccept',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'accept');
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
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'decline');
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
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', null);
    // DO NOT reset the db to null on /:code !!
    // in case the guest uses the back button after submitting the form.
  }
});

FlowRouter.route('/:code/accept', {
  name: 'RSVP.codeAccept',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'accept');
    Meteor.call('invitations.setResponse', {
      rsvpCode: code,
      response: 'accept'
    });
  }
});

FlowRouter.route('/:code/decline', {
  name: 'RSVP.codeDecline',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'decline');
    Meteor.call('invitations.setResponse', {
      rsvpCode: code,
      response: 'decline'
    });
  }
});
