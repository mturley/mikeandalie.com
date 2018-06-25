FlowRouter.route('/rsvp', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', false);
    globalState.set('response', false);
  }
});

FlowRouter.route('/rsvp/no-code', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', false);
  }
});

FlowRouter.route('/rsvp/no-code/yes', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'yes');
  }
});

FlowRouter.route('/rsvp/no-code/no', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'no');
  }
});

FlowRouter.route('/rsvp/:code', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', null);
  }
});

FlowRouter.route('/rsvp/:code/yes', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'yes');
  }
});

FlowRouter.route('/rsvp/:code/no', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'no');
  }
});
