FlowRouter.route('/', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', false);
    globalState.set('response', false);
  }
});

FlowRouter.route('/no-code', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', false);
  }
});

FlowRouter.route('/no-code/accept', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'accept');
  }
});

FlowRouter.route('/no-code/decline', {
  name: 'RSVP.emptyCodeField',
  action() {
    globalState.set('code', '');
    globalState.set('lostCode', true);
    globalState.set('response', 'decline');
  }
});

FlowRouter.route('/:code', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', null);
  }
});

FlowRouter.route('/:code/accept', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'accept');
  }
});

FlowRouter.route('/:code/decline', {
  name: 'RSVP.emptyCodeField',
  action({ code }) {
    globalState.set('code', code);
    globalState.set('lostCode', false);
    globalState.set('response', 'decline');
  }
});
