import React from 'react';
import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { render } from 'react-dom';

import RSVPApp from '../imports/ui/RSVPApp.js';

globalState = new ReactiveDict();

const GLOBAL_KEYS = ['code', 'lostCode', 'response'];

const getGlobalState = () => GLOBAL_KEYS.reduce((props, key) => ({
  ...props,
  [key]: globalState.get(key)
}), {});

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = getGlobalState();
    this._tracker = null;
  }

  componentDidMount() {
    const that = this;
    this._tracker = Tracker.autorun(() => {
      that.setState(getGlobalState());
    });
  }

  componentWillUnmount() {
    this._tracker.stop();
  }

  render() {
    return <this.props.component {...this.state} />;
  }
}

Meteor.startup(() => {
  render(<AppContainer component={RSVPApp} />, document.getElementById('render-target'));
});