import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeApp from './HomeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeApp />, document.getElementById('root'));
registerServiceWorker();
