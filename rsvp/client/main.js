import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import RSVPApp from '../imports/ui/RSVPApp.js';

Meteor.startup(() => {
  render(<RSVPApp />, document.getElementById('render-target'));
});