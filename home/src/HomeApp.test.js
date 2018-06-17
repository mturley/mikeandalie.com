import React from 'react';
import ReactDOM from 'react-dom';
import HomeApp from './HomeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
